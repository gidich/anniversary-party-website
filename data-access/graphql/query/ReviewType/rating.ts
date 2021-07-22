import { gql } from "apollo-server-azure-functions"
import {IReviewData} from '../../interfaces'

export const typeDefs = gql`
  extend type ReviewType {
    rating: Float
  }

`

export const resolvers = (root: IReviewData, args, context, info): number => {
    return root.rating
}


