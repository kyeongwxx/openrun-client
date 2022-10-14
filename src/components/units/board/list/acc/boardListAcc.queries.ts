import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards(
    $dateType: String!
    $page: Int
    $search: String
    $direcion: String
    $category: String
  ) {
    fetchBoards(
      dateType: $dateType
      page: $page
      search: $search
      category: $category
      direcion: $direcion
    ) {
      id
      title
      contents
      price
      dueDate
      status
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
      image
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
