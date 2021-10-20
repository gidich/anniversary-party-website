import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../App.css';
import {
  GET_ORDERS_BY_CUSTOMER_ID,
  OrderContainer,
  OrdersData,
} from './order-container';

const sampleOrderData = {
  orders: [
    {
      __typename: 'OrderType',
      amt: 299,
      customerId: 'customerId',
      orderDate: '01/01/2011',
      orderId: 'orderId',
      items: [
        {
          __typename: 'OrderItemType',
          productId: 'productId1',
          qty: 4,
          price: 50,
        },
        {
          __typename: 'OrderItemType',
          productId: 'productId2',
          qty: 1,
          price: 99,
        },
      ],
    },
    {
      __typename: 'OrderType',
      amt: 100,
      customerId: 'customerId',
      orderDate: '01/01/2011',
      orderId: 'orderId',
      items: [
        {
          __typename: 'OrderItemType',
          productId: 'productId1',
          qty: 2,
          price: 50,
        },
      ],
    },
  ],
};

export default {
  title: 'Example/OrderContainer',
  component: OrderContainer,
  argTypes: {},
} as ComponentMeta<typeof OrderContainer>;

const Template: ComponentStory<typeof OrderContainer> = (args) => (
  <OrderContainer {...args} />
);

export const ContainerDefault = Template.bind({});
ContainerDefault.args = {
  customerId: '123',
};
ContainerDefault.parameters = {
  apolloClient: {
    mocks: [
      {
        request: {
          query: GET_ORDERS_BY_CUSTOMER_ID,
          variables: { customerId: '123' },
        },
        result: {
          data: { ordersByCustomerId: sampleOrderData.orders } as OrdersData,
        },
      },
    ],
  },
};
