import { gql } from "apollo-server-azure-functions"
import {IProductData} from '../../interfaces'

export const typeDefs = gql`
  extend type ProductType {
    price: Float!
  }

`

export const resolvers = (root: IProductData, args, context, info): number => {
    return root.price
}


