import { FC } from 'react';

import { useQuery, gql } from "@apollo/client";
import { AttendeeList } from './attendee-list';

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
    dateConfirmed:Date
  }[]
}

interface AttendeeVars {
  status: string
}

export const AttendeeListContainer: FC<any> = 
  ({props:any}) => {
  
  const { loading, error, data} = useQuery<AttendeeData,AttendeeVars>(GET_ATTENDEES,{
    variables: {
      status: 'registered'
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

  if (typeof data?.attendees === 'undefined' ) {
    return <>
      <div>No Data...</div>
    </>
  }

  return <>
    <div>Attendees!</div>
    <AttendeeList attendees={data.attendees} />
  </>
  
}