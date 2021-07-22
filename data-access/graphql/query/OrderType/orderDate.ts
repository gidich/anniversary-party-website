import { gql } from "apollo-server-azure-functions"
import {IOrderData} from '../../interfaces'

export const typeDefs = gql`
  extend type OrderType {
    orderDate: String!
  }

`

export const resolvers = (root: IOrderData, args, context, info): Date => {
    return root.orderDate
}


