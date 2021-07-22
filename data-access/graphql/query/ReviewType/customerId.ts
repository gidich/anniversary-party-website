import { gql } from "apollo-server-azure-functions"
import {IReviewData} from '../../interfaces'

export const typeDefs = gql`
  extend type ReviewType {
    customerId: String!
  }

`

export const resolvers = (root: IReviewData, args, context, info): string => {
    return root.customerId
}


