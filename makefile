PROJECT_NAME ?= graphql-tutorial
ENV ?= dev

AWS_BUCKET_NAME ?= $(PROJECT_NAME)-artifacts-$(ENV)
AWS_STACK_NAME ?= $(PROJECT_NAME)-stack-$(ENV)
AWS_REGION ?= us-west-2

FILE_TEMPLATE = ./cloudformation/template.yaml
FILE_PACKAGE = ./build/packaged.yaml

configure:
	aws s3 mb s3://$(AWS_BUCKET_NAME) \
		--region $(AWS_REGION)

clean:
	rm -rf ./.aws-sam/build && mkdir ./.aws-sam/build

build-container:
	sam build --use-container

local:
	sam local start-api -t ./cloudformation/template.yaml -p 8000

build:
	npm run build

watch:
	npm run watch

pd:
	make package && make deploy

package:
	aws cloudformation package \
		--template-file $(FILE_TEMPLATE) \
		--s3-bucket $(AWS_BUCKET_NAME) \
		--output-template-file $(FILE_PACKAGE)

deploy:
	sam deploy \
	--template-file $(FILE_PACKAGE) \
	--stack-name $(AWS_STACK_NAME) \
	--capabilities CAPABILITY_NAMED_IAM \
	--region $(AWS_REGION) \
	--parameter-overrides \
		ProjectName=$(PROJECT_NAME) \
		ENV=$(ENV)

stop:
	docker stop $(shell docker ps -aq)

rm-all:
	docker rm $(shell docker ps -aq)

rm-all-images:
	docker rmi -f $(shell docker images -q)

nuke:
	make stop && make rm-all && make rm-all-images
