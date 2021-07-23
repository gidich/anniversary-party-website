import { FC } from 'react';
import { useQuery, gql } from "@apollo/client";
import { Order, OrderFields, ComponentProp as OrderProp} from './order';
import PropTypes, { InferProps } from 'prop-types';

export const GET_ORDERS_BY_CUSTOMER_ID = gql`
  query getOrdersByCustomerId($customerId: String!) {
    ordersByCustomerId(customerId: $customerId) {
      
      ...OrderFields   
    }
  }
  ${OrderFields}
`;

export interface OrdersData {
  ordersByCustomerId: OrderProp[]
}

interface OrderVars {
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

export const OrderContainer: FC<ComponentProps> = 
  ({customerId}) => {
  

  const { loading, error, data} = useQuery<OrdersData,OrderVars>(GET_ORDERS_BY_CUSTOMER_ID,{
    variables: {
      customerId: customerId
    }
  })

  if(error){
    console.log(error);
    return <>
      <div>Error :( {JSON.stringify(error)}</div>
    </>
  } 

  if(loading){
    console.log('loading',loading);
    return <>
      <div>Loading...</div>
    </>
  } 

  if (typeof data === 'undefined' ) {
    console.log('nodata')
    return <>
      <div>No Data...</div>
    </>
  }

  return <>
    <div>Orders!</div>
    {data.ordersByCustomerId.map(order => <Order key={order.orderId} {...order} />)}
  </>
  
}