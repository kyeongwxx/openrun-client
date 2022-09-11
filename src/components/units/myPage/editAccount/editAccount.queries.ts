import { gql } from "@apollo/client";

export const UPDATE_LOGIN_USER = gql`
  mutation updateLoginUser($updateUserInput: UpdateUserInput!) {
    updateLoginUser(updateUserInput: $updateUserInput) {
      id
      email
      password
      nickName
      phone
      profileImg
    }
  }
`;
