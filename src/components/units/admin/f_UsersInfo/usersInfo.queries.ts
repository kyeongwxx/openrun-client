import { gql } from "@apollo/client";

export const FETCH_USERS = gql`
  query fetchUsers {
    fetchUsers {
      nickName
      id
      email
      isAdmin
      createdAt
      boardTotal
      paymentTotal
    }
  }
`;
// export const FETCH_PAYMENTS = gql`
// query fetchPayments{
//     fetchPayments{

// }
// }
// `;
