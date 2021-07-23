import { FC } from 'react';
import { useQuery, gql } from "@apollo/client";
import PropTypes, { InferProps } from 'prop-types';

export const GET_REVIEWS_BY_CUSTOMER_ID3 = gql`
  query GetAttendees {
    reviews {
      id   
    }
  }
`;

export interface CustomerReviewsData {
  reviews: {
    id: number;
  }[] 
}

interface CustomerReviewsVars {
  /** 
  Provides a filter to the query.
  */
  customerId: string
}

const ComponentPropTypes = {
  customerId: PropTypes.string.isRequired
}

interface ComponentProp {
  customerId: string
}

export type ComponentProps = InferProps<typeof ComponentPropTypes> & ComponentProp;

export const CustomerReview: FC<ComponentProps> = ({
    customerId
  }) => {
  
 console.log('starting to load for' + customerId); 
  const { loading, error, data} = useQuery<CustomerReviewsData,CustomerReviewsVars>(GET_REVIEWS_BY_CUSTOMER_ID3,{

  })


  if(error){
    return <>
      <div>Error :( {JSON.stringify(error)}</div>
    </>
  } 

  if(loading){
    console.log('loadingstate',customerId);
    return <>
      <div>Loading...</div>
    </>
  } 

  if (typeof data === 'undefined' ) {
    console.log('not it');
    return <>
      <div>No Customer Review Data for {customerId}...</div>
    </>
  }
  console.log('got it');
  return <>
    <div>Customer Reviews!</div>
    {data.reviews.map(review => <div key={review.id}>{review.id}</div>)}
  </>
  
}