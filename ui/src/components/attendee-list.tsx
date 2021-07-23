import { FC } from 'react';
import { gql } from "@apollo/client";
import { Card, Descriptions, Grid, List, Table } from 'antd';
import PropTypes, { InferProps } from 'prop-types';

export const AttendeeListFields = gql`
  fragment AttendeeListFields on Attendee {
    id
    firstName
    lastName
    guests
    dateConfirmed     
  }
`;

const { useBreakpoint } = Grid;

const AttendeeListPropTypes = {
  
  attendees: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      guests: PropTypes.number.isRequired,
      dateConfirmed: PropTypes.instanceOf(Date)
    }).isRequired
  ).isRequired
}

export interface AttendeeListProp {
  /**
  Sets button functionality based on the current user's logged in status.
  */
  attendees: {
    __typename?: 'Attendee',
    id:number,
    firstName:string,
    lastName:string,
    guests:number,
    dateConfirmed?: Date | null
  }[]
}

export type AttendeeListProps = InferProps<typeof AttendeeListPropTypes> & AttendeeListProp;

export const AttendeeList: FC<AttendeeListProps> = ({
  attendees
  }) => {
    const screens = useBreakpoint();
    if(screens.lg){
      const columns = [
        {
          title: 'First',
          dataIndex: 'firstName',
          key: 'firstName'
        },
        {
          title: 'Last',
          dataIndex: 'lastName',
          key: 'lastName'
        },
        {
          title: 'Guests',
          dataIndex: 'guests',
          key: 'guests'
        },
        {
          title: 'Confirmed',
          dataIndex: 'dateConfirmed',
          key: 'dateConfirmed',
          render: (dateConfirmed?: Date) => <>{dateConfirmed?dateConfirmed.toISOString():'Not Registered'}</>
        },
      ]
      return <>
        <Table
          dataSource={attendees as any}
          columns={columns}
          >
        </Table>
      </>      
    }else{
      return <>
      <List
        dataSource={attendees}
        renderItem={(attendee) => (
          <List.Item>
            <Card title={`${attendee.firstName} ${attendee.lastName}`}>
              <Descriptions>
                <Descriptions.Item label="Guests">{attendee.guests}</Descriptions.Item>
                <Descriptions.Item label="DateConfirmed">{attendee.dateConfirmed?attendee.dateConfirmed.toISOString():'Not Registered'}</Descriptions.Item>
              </Descriptions>
            </Card>
          </List.Item>
        )}
        />
    </>
    }
  }