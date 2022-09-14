import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      id
      title
      contents
      price
      category {
        name
      }
      location {
        zipcode
        address
        addressDetail
      }
      image {
        url
      }
    }
  }
`;
export const UPDATE_BOARD = gql`
  mutation updateBoard(
    $boardId: String!
    $updateBoardInput: UpdateBoardInput!
  ) {
    updateBoard(boardId: $boardId, updateBoardInput: $updateBoardInput) {
      id
      title
      contents
      price
      dueDate
      category {
        name
      }
      location {
        zipcode
        address
        addressDetail
      }
      image {
        url
      }
    }
  }
`;
export const FETCH_LOGIN_USER = gql`
  query fetchLoginUser {
    fetchLoginUser {
      id
    }
  }
`;
