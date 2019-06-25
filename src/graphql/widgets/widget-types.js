import { gql } from 'apollo-server-lambda';

const WidgetTypes = gql`

    input WidgetInput {

    }

    type WidgetOutput {

    }

    extend type Query {
        getWidgetById(id: ID) WidgetOutput
    }

    extend type Mutation {
        saveWidget(widget: WidgetInput)
    }
`;

export default WidgetTypes;
