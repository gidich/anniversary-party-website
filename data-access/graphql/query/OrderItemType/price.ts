import { gql } from "apollo-server-azure-functions"
import {IOrderItemData} from '../../interfaces'

export const typeDefs = gql`
  extend type OrderItemType {
    price: Float!
  }

`

export const resolvers = (root: IOrderItemData, args, context, info): number => {
    return root.price
}


