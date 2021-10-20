import React, { FC } from "react";
import { AuthorityCard, AuthorityFragment, IAuthority } from "./authority-card";
import { List } from "antd";
import { gql } from "@apollo/client";

export const AuthorityListFragment = gql`
  fragment AuthorityListFragment on AuthorityListType {
    authorities {
      ...AuthorityFragment
    }
  }
  ${AuthorityFragment}
`;

interface IAuthorityCardListProps {
  onDelete: (_id: string) => {};
  onEdit: (_id: string) => {};
  authorities: IAuthority[];
}

export const AuthorityCardList: FC<IAuthorityCardListProps> = ({
  onDelete,
  onEdit,
  authorities,
}) => {
  return (
    <div
      className="space-align-container"
      style={{ minHeight: "200px", backgroundColor: "#f7f7f7" }}
    >
      <List
        dataSource={authorities}
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
              onEdit={() => onEdit && onEdit(item._id)}
              onDelete={() => onDelete && onDelete(item._id)}
            />
          </List.Item>
        )}
      />
    </div>
  );
};
