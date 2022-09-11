import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      id
      email
    }
  }
`;

export const SEND_TOKEN_TO_PHONE = gql`
  mutation sendTokenToPhone($phone: String!) {
    sendTokenToPhone(phone: $phone)
  }
`;

export const CHECK_TOKEN_BY_PHONE = gql`
  mutation checkTokenByPhone($phone: String!, $token: String!) {
    checkTokenByPhone(phone: $phone, token: $token)
  }
`;
