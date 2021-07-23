import { FC } from 'react';
import { useQuery, gql } from "@apollo/client";
import { Review, ReviewFields, ComponentProp as ReviewProp} from './review';
import PropTypes, { InferProps } from 'prop-types';

export const GET_REVIEWS_BY_CUSTOMER_ID = gql`
  query GetReviewsByCustomerId($customerId: String!) {
    reviewsByCustomerId(customerId: $customerId) {
      ...ReviewFields
      reviewId
    }
  }
  ${ReviewFields}
`;

export interface CustomerReviewsData {
  reviewsByCustomerId: (
    {reviewId : string} & //append reviewId to the review interface
    ReviewProp 
  )[] 
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

export const CustomerReviewContainer: FC<ComponentProps> = ({
    customerId
  }) => {
  
  const { loading, error, data} = 
    useQuery<CustomerReviewsData,CustomerReviewsVars>(
      GET_REVIEWS_BY_CUSTOMER_ID,{
        variables: {
          customerId: customerId
        }
      }
    )
  
  if(error){
    return <>
      <div>Error :( {JSON.stringify(error)}</div>
    </>
  } 

  if(loading){
    return <>
      <div>Loading...</div>
    </>
  } 

  if (typeof data === 'undefined' ) {
    return <>
      <div>No Customer Review Data for {customerId}...</div>
    </>
  }
  return <>
    <div>Customer Reviews!</div>
    {data.reviewsByCustomerId.map(review => <Review key={review.reviewId} {...review} />)}
  </>
  
}