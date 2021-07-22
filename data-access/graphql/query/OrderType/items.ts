import { gql } from "apollo-server-azure-functions"
import {IOrderData, IOrderItemData} from '../../interfaces'

export const typeDefs = gql`
  extend type OrderType {
    items: [OrderItemType]!
  }

`

export const resolvers = (root: IOrderData, args, context, info): IOrderItemData[] => {
    return root.items
}


