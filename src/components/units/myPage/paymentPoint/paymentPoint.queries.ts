import { gql } from "@apollo/client";

export const CHARGE_PAYMENT = gql`
  mutation chargePayment($impUid: String!, $amount: Int!) {
    chargePayment(impUid: $impUid, amount: $amount) {
      id
      # impUid
      # status
      # amount
      # user {
      #   id
      #   email
      #   nickName
      #   point
      # }
    }
  }
`;

export const CANCEL_PAYMENT = gql`
  mutation cancelPayment($impUid: String!, $amount: Float!) {
    cancelPayment(impUid: $impUid, amount: $amount) {
      id
      impUid
      status
      amount
      user {
        id
        point
      }
    }
  }
`;

export const FETCH_POINT_CHARGE_HISTORY = gql`
  query fetchPointChargeHistory($page: Int) {
    fetchPointChargeHistory(page: $page) {
      id
      impUid
      status
      amount
      createdAt
      user {
        id
        email
      }
    }
  }
`;
