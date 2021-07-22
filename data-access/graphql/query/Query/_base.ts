import { gql } from "apollo-server-azure-functions"

export const typeDefs = gql`
  type Query {
    _base: String
  }

`

export const resolvers = (root, args, context, info) => {
    return '_base'
}


