import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommercePage } from './commerce-page';
import '../App.css';
import { GET_ORDERS_BY_CUSTOMER_ID, OrdersData } from './order-container';
import { GET_REVIEWS_BY_CUSTOMER_ID, CustomerReviewsData } from './review-container-by-customer';
import { GET_REVIEWS_BY_PRODUCT_ID, ProductReviewsData } from './review-container-by-product';

const sampleOrderData = { 
  orders : [
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
          price: 50
        },
        {
          __typename: 'OrderItemType',
          productId: 'productId2',
          qty: 1,
          price: 99
        }
      ]
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
          price: 50
        }
      ]
    }
  ] 
}

const sampleReviewData ={ 
  reviews: [
    {
      __typename: 'ReviewType',
      reviewId: '123',
      customerId: 'customerId',
      reviewDate: '01/01/2011',
      productId: 'productId1',
      rating: 5,
      reviewDesc: 'this is great'
    },
    {
      __typename: 'ReviewType',
      reviewId: '456',
      customerId: 'customerId',
      reviewDate: '01/01/2011',
      productId: 'productId2',
      rating: 1,
      reviewDesc: 'this is horrible'
    }
  ] 
}

export default {
  title: 'Example/CommercePage',
  component: CommercePage,
  argTypes: {
    
  },
} as ComponentMeta<typeof CommercePage>;

const Template: ComponentStory<typeof CommercePage> = (args) => <CommercePage {...args} />;

export const ContainerDefault = Template.bind({});
ContainerDefault.args ={
    customerId: '123',
    productId: '123',
  }
ContainerDefault.parameters = {
  apolloClient: {
    mocks: [
      {
        request: {
          query: GET_ORDERS_BY_CUSTOMER_ID,
          variables: {customerId: '123'}
        },
        result: {
          data: {ordersByCustomerId:sampleOrderData.orders} as OrdersData
        }
      },
      {
        request: {
          query: GET_REVIEWS_BY_CUSTOMER_ID,
          variables: {customerId: '123'}
        },
        result: {
          data: {reviewsByCustomerId: sampleReviewData.reviews} as CustomerReviewsData
        }
      },
      {
        request: {
          query: GET_REVIEWS_BY_PRODUCT_ID,
          variables: {productId: '123'}
        },
        result: {
          data: {reviewsByProductId:sampleReviewData.reviews} as ProductReviewsData
        }
      }
    ]
  }
}