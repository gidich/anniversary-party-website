import { gql } from "apollo-server-azure-functions"
import {IOrderData} from '../../interfaces'
import {orders} from '../../datasources'

export const typeDefs = gql`
  extend type Query {
    ordersByCustomerId(customerId: String): [OrderType]
  }

`

export const resolvers = (root, args, context, info): IOrderData[] => {
    return orders.filter(i => i.customerId === args.customerId)
}


