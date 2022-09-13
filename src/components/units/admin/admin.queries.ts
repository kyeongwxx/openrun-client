import { gql } from "@apollo/client";

export const FETCH_USERS = gql`
  query fetchUsers {
    fetchUsers {
      id
      email
      isAdmin
      createdAt
      boardTotal
      paymentTotal
      nickName
    }
  }
`;
