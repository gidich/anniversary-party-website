import { gql } from "apollo-server-azure-functions"
import {IProductData} from '../../interfaces'

export const typeDefs = gql`
  type ProductType {
    _base: String
  }

`

export const resolvers = (root: IProductData, args, context, info) => {
    return '_base'
}


