import { gql } from "apollo-server-azure-functions"
import {IProductData} from '../../interfaces'

export const typeDefs = gql`
  extend type ProductType {
    productId: String!
  }

`

export const resolvers = (root: IProductData, args, context, info): string => {
    return root.productId
}


