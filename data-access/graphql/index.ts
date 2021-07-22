process.on("uncaughtException", (err) => {
  console.log(`*** [physician-unhandled-error] - ${JSON.stringify(err)}`)
  process.exit(1);
});

import { HttpRequest, Context } from "@azure/functions";
import GraphqlStartup from './startup'


// CODE EXCEUTION @ API CALL
export default (context: Context, req: HttpRequest) => {
  return GraphqlStartup(context, req);
}



/* Below is the original code from Patrick
import { ApolloServer, gql }  from 'apollo-server-azure-functions';

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

const server = new ApolloServer(
  { 
  typeDefs, 
  resolvers, 
  playground:true 
  },
);

exports.graphqlHandler = server.createHandler();
*/