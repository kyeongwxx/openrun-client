import { gql } from "@apollo/client";

export const FETCH_PAYMENT_HISTORY = gql`
  query fetchPaymentHistory($page: Int) {
    fetchPaymentHistory(page: $page) {
      id
      price
      status
      createdAt
      title
      user {
        id
        nickName
      }

      # board {
      #   id
      #   title
      #   dueDate
      #   status
      #   image {
      #     url
      #   }
      #   user {
      #     nickName
      #     id
      #   }
    }
  }
`;
