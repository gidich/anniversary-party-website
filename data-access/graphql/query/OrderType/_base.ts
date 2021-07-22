import { gql } from "apollo-server-azure-functions"
import {IOrderData} from '../../interfaces'

export const typeDefs = gql`
  type OrderType {
    _base: String
  }

`

export const resolvers = (root: IOrderData, args, context, info) => {
    return '_base'
}


