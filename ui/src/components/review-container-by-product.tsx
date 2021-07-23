import { FC } from 'react';
import { useQuery, gql } from "@apollo/client";
import { Review, ReviewFields, ComponentProp as ReviewProp} from './review';
import PropTypes, { InferProps } from 'prop-types';

export const GET_REVIEWS_BY_PRODUCT_ID = gql`
  query GetReviewsByProductId($productId: String!) {
    reviewsByProductId(productId: $productId) {
      ...ReviewFields
      reviewId   
    }
  }
  ${ReviewFields}
`;

export interface ProductReviewsData {
  reviewsByProductId: (
    {reviewId : string} & //append reviewId to the review interface
    ReviewProp 
  )[] 
}

interface ProductReviewsVars {
  /** 
  Provides a filter to the query.
  */
  productId: string
}

const ComponentPropTypes = {
  productId: PropTypes.string.isRequired
}

interface ComponentProp {
  productId: string
}

export type ComponentProps = InferProps<typeof ComponentPropTypes> & ComponentProp;

export const ProductReviewContainer: FC<ComponentProps> = 
  ({
    productId
  }) => {
  
  const { loading, error, data} = 
    useQuery<ProductReviewsData,ProductReviewsVars>(
      GET_REVIEWS_BY_PRODUCT_ID,{
        variables: {
          productId: productId
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
      <div>No Data...</div>
    </>
  }

  return <>
    <div>Product Reviews!</div>
    {data.reviewsByProductId.map(review => <Review key={review.reviewId} {...review} />)}
  </>
  
}