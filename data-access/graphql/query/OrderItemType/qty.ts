import { gql } from "apollo-server-azure-functions"
import {IOrderItemData} from '../../interfaces'

export const typeDefs = gql`
  extend type OrderItemType {
    qty: Int!
  }

`

export const resolvers = (root: IOrderItemData, args, context, info): number => {
    return root.qty
}


