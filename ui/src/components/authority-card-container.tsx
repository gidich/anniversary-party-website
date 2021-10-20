import React, { FC } from "react";
import { AuthorityCard, AuthorityFragment, IAuthority } from "./authority-card";
import { List } from "antd";
import { gql, useQuery } from "@apollo/client";

export const AUTHORITY_QUERY = gql`
  query GetAuthoritiesList {
    applicantPortal {
      authorities {
        ...AuthorityFragment
      }
    }
  }
  ${AuthorityFragment}
`;

export interface AuthorityData {
  applicantPortal: {
    authorities: IAuthority[];
  };
}

export const AuthorityCardContainer: FC<any> = (props) => {
  const { data } = useQuery<AuthorityData>(AUTHORITY_QUERY);
  return (
    <div
      className="space-align-container"
      style={{ minHeight: "200px", backgroundColor: "#f7f7f7" }}
    >
      {/* <List
        dataSource={(data?.applicantPortal?.authorities as IAuthority[]) ?? []}
        grid={{
          gutter: 16,
          xs: 3,
          sm: 3,
          md: 3,
          lg: 3,
          xl: 6,
          xxl: 6,
        }}
        renderItem={(item) => (
          <List.Item>
            <AuthorityCard
              key={item._id}
              displayValues={item}
              onEdit={(id) => {
                return {};
              }}
              onDelete={(id) => {
                return {};
              }}
            />
          </List.Item>
        )}
      /> */}
    </div>
  );
};
