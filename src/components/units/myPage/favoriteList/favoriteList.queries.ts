import { gql } from "@apollo/client";

export const FETCH_INTEREST_BOARDS = gql`
  query fetchInterestBoards($page: Int) {
    fetchInterestBoards(page: $page) {
      id
      user {
        id
      }
      board {
        id
        title
        status
        price
        dueDate
        user {
          nickName
        }
        image {
          url
        }
      }
    }
  }
`;
