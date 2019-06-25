import { gql } from 'apollo-server-lambda';

const WidgetTypes = gql`
  input WidgetInput {
    widget_id: String!
    name: String
    type: String
  }

  type WidgetOutput {
    widget_id: String!
    name: String
    type: String
  }

  extend type Query {
    getWidget(widget_id: ID): WidgetOutput
  }

  extend type Mutation {
    saveWidget(widget: WidgetInput): Boolean
  }
`;

export default WidgetTypes;
