import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AttendeeList, AttendeeListProps } from './attendee-list';
import '../App.css';

const sampleData = {
  attendees: [
    {
      id: 1234,
      firstName: 'Jane',
      lastName: 'Doe',
      guests:1,
      dateConfirmed: new Date('01/01/2021')
    },
    {
      id: 1234,
      firstName: 'John',
      lastName: 'Doe',
      guests:1,
      dateConfirmed: new Date('01/01/2021')
    },
    {
      id: 1234,
      firstName: 'Sam',
      lastName: 'Smith',
      guests:1
    }
  ]
} as AttendeeListProps

export default {
  title: 'Example/AttendeeList',
  component: AttendeeList,
  argTypes: {
    
  },
} as ComponentMeta<typeof AttendeeList>;

const Template: ComponentStory<typeof AttendeeList> = (args) => <AttendeeList {...args} />;

export const DefaultView = Template.bind({});
DefaultView.args = sampleData;