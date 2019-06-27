import { gql } from 'apollo-server-lambda';

const WidgetTypes = gql`
  input WidgetInput {
    name: String!
    type: String!
    foo: String
    bar: Boolean
    bat: Int
  }

  type WidgetOutput {
    widget_id: String!
    name: String!
    type: String!
    foo: String
    bar: Boolean
    bat: Int
  }

  type SaveWidgetOutput {
    success: Boolean
  }

  extend type Query {
    getWidget(widget_id: ID): WidgetOutput
  }

  extend type Mutation {
    saveWidget(widget: WidgetInput): SaveWidgetOutput
  }
`;

export default WidgetTypes;
