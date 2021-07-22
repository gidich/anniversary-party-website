import { gql } from "apollo-server-azure-functions"
import {IOrderItemData} from '../../interfaces'

export const typeDefs = gql`
  extend type OrderItemType {
    productId: String!
  }

`

export const resolvers = (root: IOrderItemData, args, context, info): string => {
    return root.productId
}


