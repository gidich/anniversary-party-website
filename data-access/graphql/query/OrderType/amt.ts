import { gql } from "apollo-server-azure-functions"
import {IOrderData} from '../../interfaces'

export const typeDefs = gql`
  extend type OrderType {
    amt: Int!
  }

`

export const resolvers = (root: IOrderData, args, context, info): number => {
    return root.amt
}


