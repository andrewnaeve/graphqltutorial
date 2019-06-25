import { ApolloServer } from 'apollo-server-lambda';
import schema from './graphql/schema';
import tables from './config/tables';

const server = new ApolloServer({
  schema
});

export const handler = server.createHandler({
  cors: {
    origin: true,
    credentials: true
  }
});
