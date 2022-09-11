import { gql } from "@apollo/client";

export const FETCH_PAYMENT_HISTORY = gql`
  query fetchPaymentHistory {
    fetchPaymentHistory {
      id
      price
      status
      board {
        title
        image {
          url
        }
      }
    }
  }
`;
