import { ComponentStory, ComponentMeta} from '@storybook/react';
import { Review }  from './review';
import '../App.css';

export default {
  title: 'Example/Review',
  component: Review,
  argTypes: {
  },
} as ComponentMeta<typeof Review>;

const Template: ComponentStory<typeof Review> = (args) => <Review {...args} />;

export const ReviewWithFiveStartRating = Template.bind({});
ReviewWithFiveStartRating.args = {
  customerId: 'customerId',
  reviewDate: '01/01/2011',
  productId: 'productId',
  rating: 5,
  reviewDesc: 'this is great'
};

export const ReviewWithNoStarRating = Template.bind({});
ReviewWithNoStarRating.args = {
  customerId: 'customerId',
  reviewDate: '01/01/2011',
  productId: 'productId',
  reviewDesc: 'this is great'
};

export const ReviewWithNoDescription = Template.bind({});
ReviewWithNoDescription.args = {
  customerId: 'customerId',
  reviewDate: '01/01/2011',
  productId: 'productId',
  rating: 3,
};