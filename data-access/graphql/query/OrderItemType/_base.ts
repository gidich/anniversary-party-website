import { gql } from "apollo-server-azure-functions"
import {IOrderItemData} from '../../interfaces'

export const typeDefs = gql`
  type OrderItemType {
    _base: String
  }

`

export const resolvers = (root: IOrderItemData, args, context, info) => {
    return '_base'
}


