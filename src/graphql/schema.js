import { makeExecutableSchema, gql } from 'apollo-server-lambda';
import merge from 'lodash.merge';
import { WidgetTypes, WidgetResolvers } from './widgets';
import clients from '../config/aws-clients';

const Query = gql`
  type Query {
    _empty: String
  }
`;

const Mutation = gql`
  type Mutation {
    _empty: String
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [Query, Mutation, WidgetTypes],
  resolvers: merge(WidgetResolvers(clients))
});

export default schema;
