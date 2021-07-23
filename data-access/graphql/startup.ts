import { ApolloServer } from "apollo-server-azure-functions";
import { HttpRequest, Context } from "@azure/functions";


import schema from './schema'
const serverConfig = () => {
  return {
    schema: schema,
    playground: { endpoint: "/api/graphql" }
  }
}

const apolloServer = new ApolloServer({
  ...serverConfig()
});

const graphqlHandler = (server, context, req) => {
  const graphqlHandlerObj = server.createHandler({
    cors: {
      origin: "*",
      preflightContinue: true, 
      credentials: true,
    },
  })

  // https://github.com/Azure/azure-functions-host/issues/6013
  req.headers["x-ms-privatelink-id"] = ""
  // apollo-server only reads this specific string
  req.headers["Access-Control-Request-Headers"] =
    req.headers["Access-Control-Request-Headers"] ||
    req.headers["access-control-request-headers"]
  return graphqlHandlerObj(context, req)
}

export default (context: Context, req: HttpRequest) => {
  return graphqlHandler(apolloServer, context, req);
};




