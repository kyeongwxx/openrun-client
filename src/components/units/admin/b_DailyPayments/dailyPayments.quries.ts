import { gql } from "@apollo/client";

export const FETCH_PAYMENTS = gql`
  query fetchPayments {
    fetchPayments {
}
  }
`;
export const FETCH_PAYMENT_HISTORY_COUNT = gql`
  query fetchPaymentHistoryCount {
    fetchPaymentHistoryCount {
}
  }
`;
