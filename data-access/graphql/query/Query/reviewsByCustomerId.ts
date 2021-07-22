import { gql } from "apollo-server-azure-functions"
import {IReviewData} from '../../interfaces'
import {reviews} from '../../datasources'

export const typeDefs = gql`
  extend type Query {
    reviewsByCustomerId(customerId: String): [ReviewType]
  }

`

export const resolvers = (root, args, context, info): IReviewData[] => {
    return reviews.filter( i => i.customerId === args.customerId)
}


