import { FC } from 'react';
import { gql } from "@apollo/client";
import { Rate, Card, Descriptions } from 'antd';
import PropTypes, { InferProps } from 'prop-types';
import styles from './review.module.css'; 

export const ReviewFields = gql`
  fragment ReviewFields on ReviewType {    
    customerId
    reviewDate
    productId
    rating
    reviewDesc     
  }
`;

const ComponentPropTypes = {
  customerId: PropTypes.string.isRequired,
  reviewDate: PropTypes.string.isRequired,
  productId: PropTypes.string.isRequired,
  rating: PropTypes.number,
  reviewDesc: PropTypes.string
}

export interface ComponentProp {
  /**
  Review data
  */
  __typename?: 'ReviewType';
  customerId: string,
  reviewDate: string,
  productId: string,
  rating?: number,
  reviewDesc?: string
}

export type ComponentProps = InferProps<typeof ComponentPropTypes> & ComponentProp;

export const Review: FC<ComponentProps> = ({
  customerId,
  reviewDate,
  productId,
  rating,
  reviewDesc
  }) => {

    let ratingItem = <>No Rating</>
    if(typeof rating !== 'undefined') {
      ratingItem = <>
        <div className='review-rating'>
          <Rate disabled defaultValue={rating} />
        </div>
      </>
    }

    let reviewItem = <>No Review</>
    if(reviewDesc) {
      reviewItem = <>
        <div className={styles['review-body']}>
          {reviewDesc}
        </div>
      </>
    }

    return <>
      <Card style={{width:400}}>
        <Descriptions 
          size={'small'}
          column={1}
          layout="vertical"
          labelStyle={{color:'rgb(175 175 175)', fontWeight:'bold', fontSize:'.7rem'}}
          >
          <Descriptions.Item label="Customer">{customerId}</Descriptions.Item> 
          <Descriptions.Item label="Product"> {productId}</Descriptions.Item> 
          <Descriptions.Item label="Date"> {reviewDate}</Descriptions.Item> 
        </Descriptions>
        {ratingItem}
        {reviewItem}
      </Card>
    </>
}