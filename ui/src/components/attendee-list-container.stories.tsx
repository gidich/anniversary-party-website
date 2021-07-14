import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AttendeeData, AttendeeListContainer, Queries } from './attendee-list-container';
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
      guests:1,
      dateConfirmed: new Date('01/01/2021')
    }
]
} as AttendeeData


export default {
  title: 'Example/AttendeeList/Container',
  component: AttendeeListContainer,
  argTypes: {
    
  },
} as ComponentMeta<typeof AttendeeListContainer>;

const Template: ComponentStory<typeof AttendeeListContainer> = (args) => <AttendeeListContainer {...args} />;

export const ContainerDefault = Template.bind({});

ContainerDefault.parameters = {
  apolloClient: {
    mocks: [
      {
        request: {
          query: Queries.GetAttendesQuery,
          variables: {status: 'registered'}
        },
        result: {
          data: sampleData
        }
      }
    ]
  }
}
