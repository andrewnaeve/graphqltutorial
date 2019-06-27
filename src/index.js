import { ApolloServer } from 'apollo-server-lambda';
import schema from './graphql/schema';
import tables from './config/tables';

const server = new ApolloServer({
  schema,
  context: ({ context }) => {
    context.callbackWaitsForEmptyEventLoop = false;
    return {
      ...tables
    };
  }
});

export const handler = server.createHandler({
  cors: {
    origin: true,
    credentials: true
  }
});
