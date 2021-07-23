import { ComponentStory, ComponentMeta} from '@storybook/react';
import { Product }  from './product';
import '../App.css';

export default {
  title: 'Example/Product',
  component: Product,
  argTypes: {
  },
} as ComponentMeta<typeof Product>;

const Template: ComponentStory<typeof Product> = (args) => <Product {...args} />;

export const DefaultView = Template.bind({});
DefaultView.args = {
  data: {
    price: 3.99,
    productId: 'productId',
  }
};