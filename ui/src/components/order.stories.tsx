import { ComponentStory, ComponentMeta} from '@storybook/react';
import { Order }  from './order';
import '../App.css';

export default {
  title: 'Example/Order',
  component: Order,
  argTypes: {
  },
} as ComponentMeta<typeof Order>;

const Template: ComponentStory<typeof Order> = (args) => <Order {...args} />;

export const DefaultView = Template.bind({});
DefaultView.args = {
  amt: 299,
  customerId: 'customerId',
  orderDate: '01/01/2011',
  orderId: 'orderId',
  items: [
    {
      productId: 'productId1',
      qty: 4,
      price: 50
    },
    {
      productId: 'productId2',
      qty: 1,
      price: 99
    }
  ]
  
};