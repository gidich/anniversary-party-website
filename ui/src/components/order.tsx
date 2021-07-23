import { FC } from 'react';
import { gql } from '@apollo/client';
import { Descriptions } from 'antd';
import PropTypes, { InferProps } from 'prop-types';
import { OrderItem , ComponentPropTypes as OrderItemPropTypes, ComponentProp as OrderItemProp, OrderItemFields } from './order-item';

export const OrderFields = gql`
  fragment OrderFields on OrderType{    
    amt
    customerId
    orderDate
    orderId
    items {
      ...OrderItemFields
    }
  }
  ${OrderItemFields}
`;

const ComponentPropTypes = {
  amt: PropTypes.number.isRequired,
  customerId: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape(OrderItemPropTypes).isRequired).isRequired,
  orderDate: PropTypes.string.isRequired,
  orderId: PropTypes.string.isRequired,
}

export interface ComponentProp {
  __typename?: 'OrderType';
  amt: number,
  customerId: string,
  items: OrderItemProp[],
  orderDate: string,
  orderId: string,
}

export type ComponentProps = InferProps<typeof ComponentPropTypes> & ComponentProp;

export const Order: FC<ComponentProps> = ({
  amt,
  customerId,
  items,
  orderDate,
  orderId
  }) => {
    return <>
      <div>
        <Descriptions 
          size={'small'}
          column={1}
          layout="vertical"
          labelStyle={{color:'rgb(175 175 175)', fontWeight:'bold', fontSize:'.7rem'}}
          >
          <Descriptions.Item label="Amt" >{amt}</Descriptions.Item> 
          <Descriptions.Item label="CustomerId" > {customerId}</Descriptions.Item> 
          <Descriptions.Item label="OrderDate" > {orderDate}</Descriptions.Item> 
          <Descriptions.Item label="OrderId" > {orderId}</Descriptions.Item> 
        </Descriptions>
        <div>Items:</div>
        {items.map((item) => <div style={{display:'inline-block', padding:'20px'}}><OrderItem key={item.productId} {...item} /></div>)}
      </div>
    </>
}