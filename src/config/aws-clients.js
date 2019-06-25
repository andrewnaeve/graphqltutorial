import AWS from 'aws-sdk';
import https from 'https';

function AwsClients() {
  const agent = https.Agent({
    keepAlive: true
  });
  AWS.config.update({ httpOptions: { agent } });

  return {
    dynamodb: new AWS.DynamoDB.DocumentClient()
  };
}

export default AwsClients();
