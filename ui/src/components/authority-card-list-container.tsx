import { gql, useQuery } from "@apollo/client";
import { FC, useState } from "react";
import {
  AuthorityCardList,
  AuthorityListFragment,
} from "./authority-card-list";

export const AUTHORITIES_QUERY = gql`
  query GetAuthorities {
    applicantPortal {
      ...AuthorityListFragment
    }
  }
  ${AuthorityListFragment}
`;

export const AuthorityCardListContainer: FC<any> = (props) => {
  const { loading, data, error } = useQuery(AUTHORITIES_QUERY);
  const onDelete = (id: string) => {};
  const onEdit = (id: string) => {};

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

  if (typeof data === "undefined") {
    return (
      <>
        <div>No Data...</div>
      </>
    );
  }
  return (
    <AuthorityCardList
      authorities={data.applicantPortal.authorities}
      onDelete={(id) => onDelete}
      onEdit={(id) => onEdit}
    />
  );
};
