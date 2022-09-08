import { gql } from "@apollo/client";

export const FETCH_WRITE_BOARDS = gql`
  query fetchWriteBoards($page: Int) {
    fetchWriteBoards(page: $page) {
      id
      title
      contents
      status
      price
      dueDate
      eventDay
      #   image
    }
  }
`;
