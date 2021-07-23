import { ComponentStory, ComponentMeta} from '@storybook/react';
import { OrderItem }  from './order-item';
import '../App.css';

export default {
  title: 'Example/OrderItem',
  component: OrderItem,
  argTypes: {
  },
} as ComponentMeta<typeof OrderItem>;

const Template: ComponentStory<typeof OrderItem> = (args) => <OrderItem {...args} />;

export const DefaultView = Template.bind({});
DefaultView.args = {
  price: 3.99,
  qty:10,
  productId: 'productId',
};