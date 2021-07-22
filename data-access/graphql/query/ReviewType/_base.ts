import { gql } from "apollo-server-azure-functions"
import {IReviewData} from '../../interfaces'

export const typeDefs = gql`
  type ReviewType {
    _base: String
  }

`

export const resolvers = (root: IReviewData, args, context, info) => {
    return '_base'
}


