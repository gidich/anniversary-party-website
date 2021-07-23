import { FC } from 'react';
import { gql } from "@apollo/client";
import { Card, Descriptions } from 'antd';
import PropTypes, { InferProps } from 'prop-types';

export const ProductFields = gql`
  fragment ProductFields on ProductType {    
    productId
    price
  }
`;

const ComponentPropTypes = {
  data: PropTypes.shape({
    productId: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
}

interface ComponentProp {
  data: {
    productId: string
    price: number,
  }
}

export type ComponentProps = InferProps<typeof ComponentPropTypes> & ComponentProp;

export const Product: FC<ComponentProps> = ({
  data
  }) => {
    return <>
      <Card style={{width:200}}>
        <Descriptions 
          size={'small'}
          column={1}
          layout="vertical"
          labelStyle={{color:'rgb(175 175 175)', fontWeight:'bold', fontSize:'.7rem'}}
          >
          <Descriptions.Item label="ProductId" > {data.productId}</Descriptions.Item> 
          <Descriptions.Item label="Price" >{data.price}</Descriptions.Item> 
        </Descriptions>
      </Card>
    </>
}