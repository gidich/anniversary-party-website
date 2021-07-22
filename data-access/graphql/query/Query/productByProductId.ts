import { gql } from "apollo-server-azure-functions"
import {IProductData} from '../../interfaces'
import {products} from '../../datasources'

export const typeDefs = gql`
  extend type Query {
    productByProductId(productId: String): ProductType
  }

`

export const resolvers = (root, args, context, info): IProductData => {
    return products.filter(i => i.productId === args.productId)?.[0]
}


