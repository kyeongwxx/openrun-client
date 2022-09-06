import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      id
      title
      contents
      price
      eventDay
      eventTime
      category {
        id
        name
      }
      location {
        zipcode
        address
        addressDetail
        lat
        lng
      }
      image {
        id
        url
      }
    }
  }
`;
