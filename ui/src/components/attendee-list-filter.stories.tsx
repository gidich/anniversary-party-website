import React from 'react';
import { ComponentStory, ComponentMeta} from '@storybook/react';

import '../App.css';
import { AttendeeListFilter } from './attendee-list-filter';

export default {
  title: 'Example/AttendeeListFilter',
  component: AttendeeListFilter,
  argTypes: {
    filter : { 
      options: ['registered','notregistered','all'],
      control: 'select'
    },
    onFilterChange: {action: 'Filter Changed'},
  },
} as ComponentMeta<typeof AttendeeListFilter>;

const Template: ComponentStory<typeof AttendeeListFilter> = (args) => <AttendeeListFilter {...args} />;

export const Registered = Template.bind({});
Registered.args = {
  filter: "registered"
};

