import { gql } from "@apollo/client";

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: String!) {
    fetchBoard(boardId: $boardId) {
      id
      title
      contents
      price
      dueDate
      status
      category {
        name
      }
      location {
        zipcode
        address
        addressDetail
      }
      image
      user {
        id
      }
    }
  }
`;
