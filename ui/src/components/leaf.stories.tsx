import { Meta, Story } from '@storybook/react';
import { ILeafProps, Leaf, LEAVE_COLORS } from './Leaf';

export default {
    title: 'Example/Leaf',
    component: Leaf,
} as Meta;

const Template: Story<ILeafProps> = (args) => <Leaf {...args} />;

export const DefaultView = Template.bind({});
DefaultView.args = {
    color: LEAVE_COLORS.Blue,
    name: 'Maple',
};
