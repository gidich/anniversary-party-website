import { FC } from 'react';

import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
  from,
} from '@apollo/client';
import { BatchHttpLink } from "@apollo/client/link/batch-http";

import { setContext } from '@apollo/client/link/context';


export interface AuthProps {
  AuthenticationIdentifier?: string
}

const apolloUrl = process.env.NODE_ENV === 'production' ? '/api/graphql' : 'http://localhost:7071/api/graphql'

const ApolloConnection: FC<any> = (props) => {

  const hasAuth = props.AuthenticationIdentifier !== null && typeof props.AuthenticationIdentifier !== "undefined";
  
  const withToken = setContext(async (_, { headers }) => {
    if(hasAuth){
      const token = '1234';
      console.log('AuthToken:'+token);
      return {
        headers: {
          ...headers,
          Authorization: token ? `Bearer ${token}` : null,
        },
      };
    }else {
      return {
        headers: {
          ...headers
        },
      };
    }
  });

  /*
  const httpLink = createHttpLink({
    uri: apolloUrl,
  });
  */

  const httpLink = new BatchHttpLink({ 
    uri: apolloUrl,
    batchMax: 5, // No more than 5 operations per batch
    batchInterval: 20 // Wait no more than 20ms after first batched operation
  });

  const cache = new InMemoryCache();
  
  const client = new ApolloClient({
    link: from([withToken, httpLink]),
    cache: cache,
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
};

export default ApolloConnection;
