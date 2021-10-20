import { FC, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import {
  AttendeeList,
  AttendeeListFields,
  AttendeeListProp,
} from './attendee-list';
import { AttendeeListFilter } from './attendee-list-filter';

const GET_ATTENDEES = gql`
  query GetAttendees($status: String!) {
    attendees(status: $status) {
      ...AttendeeListFields
    }
  }
  ${AttendeeListFields}
`;

export const Queries = {
  GetAttendesQuery: GET_ATTENDEES,
};

export interface AttendeeData {
  attendees: {
    __typename?: 'Attendee';
    id: number;
    firstName: string;
    lastName: string;
    guests: number;
    dateConfirmed?: Date | null;
  }[];
}

interface AttendeeVars {
  /** 
  Provides a filter of the type of attendees
  */
  status: string;
}

export const AttendeeListContainer: FC<any> = ({ props: any }) => {
  const [filter, setFilter] = useState<string>('registered');

  const { loading, error, data } = useQuery<AttendeeData, AttendeeVars>(
    GET_ATTENDEES,
    {
      variables: {
        status: filter,
      },
      fetchPolicy: 'cache-first',
    }
  );

  if (error) {
    return (
      <>
        <div>Error :( {JSON.stringify(error)}</div>
      </>
    );
  }

  if (loading) {
    return (
      <>
        <div>Loading...</div>
      </>
    );
  }

  if (typeof data === 'undefined') {
    return (
      <>
        <AttendeeListFilter filter={filter} onFilterChange={setFilter} />
        <div>No Data...</div>
      </>
    );
  }

  return (
    <>
      <div>Attendees!</div>
      <AttendeeListFilter filter={filter} onFilterChange={setFilter} />
      <AttendeeList attendees={data.attendees} />
    </>
  );
};
