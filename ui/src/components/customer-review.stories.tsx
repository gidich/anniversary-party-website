import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../App.css';
import { GET_REVIEWS_BY_CUSTOMER_ID3, CustomerReviewsData, CustomerReview } from './customer-review';

const sampleReviewData ={ 
  reviews: [
    {
      id: 1,
    },
    {
      id: 2,
    }
  ] 
} as CustomerReviewsData;

export default {
  title: 'Example/CustomerReview',
  component: CustomerReview,
  argTypes: {
    
  },
} as ComponentMeta<typeof CustomerReview>;

const Template: ComponentStory<typeof CustomerReview> = (args) => <CustomerReview {...args} />;

export const ContainerDefault = Template.bind({});

ContainerDefault

  .parameters = {
  apolloClient: {
    mocks: [
      {
        request: {
          query: GET_REVIEWS_BY_CUSTOMER_ID3
        },
        result: {
          data: { 
            reviews: sampleReviewData.reviews
          }
        }
      }
    ]
  }
}
