import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../App.css';
import { GET_REVIEWS_BY_CUSTOMER_ID, CustomerReviewsData, CustomerReviewContainer } from './review-container-by-customer';

const sampleReviewData ={ 
  reviewsByCustomerId: [
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
}  as CustomerReviewsData

export default {
  title: 'Example/CustomerReviews',
  component: CustomerReviewContainer,
  argTypes: {
    
  },
} as ComponentMeta<typeof CustomerReviewContainer>;

const Template: ComponentStory<typeof CustomerReviewContainer> = (args) => <CustomerReviewContainer {...args} />;

export const ContainerDefault = Template.bind({});

ContainerDefault.args ={
  customerId: '321'
}
ContainerDefault
  .parameters = {
  apolloClient: {
    mocks: [
      {
        request: {
          query: GET_REVIEWS_BY_CUSTOMER_ID,
          variables: {customerId: '321'}
        },
        result: {
          data: sampleReviewData
        }
      }
    ]
  }
}
