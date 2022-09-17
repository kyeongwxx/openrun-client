import { gql } from "@apollo/client";

export const FETCH_ADMIN = gql`
  query fetchAdmin {
    fetchAdmin {
      id
      nickName
      email
      isAdmin
      createdAt
    }
  }
`;
