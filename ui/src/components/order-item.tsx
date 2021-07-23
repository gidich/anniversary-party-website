import { FC } from 'react';
import { gql } from '@apollo/client';
import { Card, Descriptions } from 'antd';
import PropTypes, { InferProps } from 'prop-types';

export const OrderItemFields = gql`
  fragment OrderItemFields on OrderItemType {    
    price
    qty
    productId 
  }
`;

export const ComponentPropTypes = {
    price: PropTypes.number.isRequired,
    qty: PropTypes.number.isRequired,
    productId: PropTypes.string.isRequired
}

export interface ComponentProp {
    __typename?: 'OrderItemType',
    price: number,
    qty: number,
    productId: string
}

export type ComponentProps = InferProps<typeof ComponentPropTypes> & ComponentProp;

export const OrderItem: FC<ComponentProps> = ({
  price,
  qty,
  productId
  }) => {
    return <>
      <Card style={{width:200}}>
        <Descriptions 
          size={'small'}
          column={1}
          layout="vertical"
          labelStyle={{color:'rgb(175 175 175)', fontWeight:'bold', fontSize:'.7rem'}}
          >
          <Descriptions.Item label="Price" >{price}</Descriptions.Item> 
          <Descriptions.Item label="Quantity" >{qty}</Descriptions.Item> 
          <Descriptions.Item label="ID" > {productId}</Descriptions.Item> 
        </Descriptions>
      </Card>
    </>
}