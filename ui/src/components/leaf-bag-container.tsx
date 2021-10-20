import { gql, useQuery } from "@apollo/client";
import { FC } from "react";
import { LeafBag } from "./leaf-bag";

export const GET_LEAVES_QUERY = gql`
  query GetLeavesQuery {
    leafPortal {
      leaves {
        name
        color
      }
    }
  }
`;
export const LeafBagContainer: FC<any> = () => {
  const { data, loading } = useQuery(GET_LEAVES_QUERY);
  return (
    <>
      <LeafBag loading={loading} leaves={data?.leafPortal?.leaves} />
    </>
  );
};
