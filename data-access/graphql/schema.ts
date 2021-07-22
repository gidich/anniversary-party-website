import {typeDefs} from './typedefs/index'
import * as resolvers from './resolvers/index'
import { makeExecutableSchema } from 'apollo-server-azure-functions'

export default makeExecutableSchema({
    typeDefs: typeDefs(),
    resolvers: resolvers
})

