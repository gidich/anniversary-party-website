import { FC,useState } from 'react';
import { useQuery, gql } from "@apollo/client";
import { AttendeeList } from './attendee-list';
import { AttendeeListFilter } from './attendee-list-filter';

const GET_ATTENDEES = gql`
  query GetAttendees($status: String!) {
    attendees(status: $status) {
      id
      firstName
      lastName
      guests
      dateConfirmed     
    }
  }
`;

export const Queries = {
  GetAttendesQuery : GET_ATTENDEES
}

export interface AttendeeData {
  attendees: {
    id:number,
    firstName:string,
    lastName:string,
    guests:number,
    dateConfirmed?:Date
  }[]
}

interface AttendeeVars {
  /** 
  Provides a filter of the type of attendees
  */
  status: string
}

export const AttendeeListContainer: FC<any> = 
  ({props:any}) => {
  
  const [filter, setFilter] = useState<string>("registered");

  const { loading, error, data} = useQuery<AttendeeData,AttendeeVars>(GET_ATTENDEES,{
    variables: {
      status: filter
    }
  })

  if(error){
    return <>
      <div>Error :( {JSON.stringify(error)}</div>
    </>
  } 

  if(loading){
    return <>
      <div>Loading...</div>
    </>
  } 

  if (typeof data === 'undefined' ) {
    return <>
      <AttendeeListFilter filter={filter} onFilterChange={setFilter} />
      <div>No Data...</div>
    </>
  }

  return <>
    <div>Attendees!</div>
    <AttendeeListFilter filter={filter} onFilterChange={setFilter} />
    <AttendeeList attendees={data.attendees} />
  </>
  
}