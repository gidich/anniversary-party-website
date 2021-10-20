import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LEAVE_COLORS } from './Leaf';
import { LeafBag } from './leaf-bag';

export default {
    title: 'Example/Leaf Bag',
    component: LeafBag,
} as ComponentMeta<typeof LeafBag>;

const Template: ComponentStory<typeof LeafBag> = (args) => (
    <LeafBag {...args} />
);
export const DefaultView = Template.bind({});
DefaultView.args = {
    leaves: [
        { name: 'Maple', color: LEAVE_COLORS.Brown },
        { name: 'Blueberry', color: LEAVE_COLORS.Blue },
        { name: 'Lavender', color: LEAVE_COLORS.Green },
        { name: 'Strawberry', color: LEAVE_COLORS.Orange },
    ],
};
