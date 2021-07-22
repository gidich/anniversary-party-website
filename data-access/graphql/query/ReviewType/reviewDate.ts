import { gql } from "apollo-server-azure-functions"
import {IReviewData} from '../../interfaces'

export const typeDefs = gql`
  extend type ReviewType {
    reviewDate: String!
  }

`

export const resolvers = (root: IReviewData, args, context, info): Date => {
    return root.reviewDate
}


