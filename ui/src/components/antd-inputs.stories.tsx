import { ComponentStory, ComponentMeta} from '@storybook/react';
import '../App.css';
import { AntdInputs } from './antd-inputs';

export default {
  title: 'Example/AntdInputs',
  component: AntdInputs,
} as ComponentMeta<typeof AntdInputs>;

const Template: ComponentStory<typeof AntdInputs> = (args) => <AntdInputs {...args} />;

export const Default = Template.bind({});