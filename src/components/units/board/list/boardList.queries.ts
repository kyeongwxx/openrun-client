import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards($dateType: String!, $page: Int) {
    fetchBoards(dateType: $dateType, page: $page) {
      id
      title
      contents
      price
      dueDate
      category {
        name
      }
      user {
        nickName
      }
      category {
        name
      }
      location {
        address
      }
      image {
        url
      }
    }
  }
`;
export const FETCH_INTEREST_BOARDS = gql`
  query fetchInterestBoards {
    fetchInterestBoards {
      board {
        id
      }
    }
  }
`;
export const FETCH_INTEREST_BOARD_ID = gql`
  query fetchInterestBoardId {
    fetchInterestBoardId
  }
`;
