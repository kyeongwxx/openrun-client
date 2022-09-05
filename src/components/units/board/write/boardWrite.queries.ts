import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      id
      title
      contents
      price
      dueDate
      location {
        id
        address
        addressDetail
        lat
        lng
      }
      image {
        id
        url
      }
      category {
        id
        name
      }
    }
  }
`;
