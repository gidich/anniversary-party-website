import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AttendeeData, AttendeeListContainer, Queries } from './attendee-list-container';
import '../App.css';

const sampleData = {
  attendees: [
    {
      id: 1,
      firstName: 'Jane',
      lastName: 'Doe',
      guests:1,
      dateConfirmed: new Date('01/01/2021')
    },
    {
      id: 2,
      firstName: 'John',
      lastName: 'Doe',
      guests:1,
      dateConfirmed: new Date('01/01/2021')
    },
    {
      id: 3,
      firstName: 'Sam',
      lastName: 'Smith',
      guests:1,
      dateConfirmed: new Date('01/01/2021')
    }
    ,
    {
      id: 4,
      firstName: 'Ama',
      lastName: 'Danara',
      guests:1,
      dateConfirmed: null
    },
    {
      id: 5,
      firstName: 'Rami',
      lastName: 'Amol',
      guests:1,
      dateConfirmed: null
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
          data: {attendees:sampleData.attendees.filter(attendee => attendee.dateConfirmed !== null)}
        }
      },
      {
        request: {
          query: Queries.GetAttendesQuery,
          variables: {status: 'notregistered'}
        },
        result: {
          data: {attendees:sampleData.attendees.filter(attendee => attendee.dateConfirmed == null)}
        }
      },
      {
        request: {
          query: Queries.GetAttendesQuery,
          variables: {status: 'all'}
        },
        result: {
          data: {attendees:sampleData.attendees}
        }
      }
    ]
  }
}