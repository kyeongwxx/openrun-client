import { gql } from "@apollo/client";

export const CHARGE_PAYMENT = gql`
  mutation chargePayment($impUid: String!, $amount: Int!) {
    chargePayment(impUid: $impUid, amount: $amount) {
      id
      impUid
      status
      amount
      user {
        id
        email
        nickName
        point
      }
    }
  }
`;

export const FETCH_POINT_CHARGE_HISTORY = gql`
  query fetchPointChargeHistory {
    id
  }
`;
