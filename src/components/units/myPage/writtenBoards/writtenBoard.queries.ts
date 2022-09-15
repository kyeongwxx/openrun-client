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
      user {
        id
        nickName
      }

      image {
        url
      }
    }
  }
`;

export const CREATE_RATING = gql`
  mutation createRating($boardId: String!, $rate: Float!) {
    createRating(boardId: $boardId, rate: $rate)
  }
`;

export const COMPLETE_BUSINESS = gql`
  mutation completeBusiness($boardId: String!) {
    completeBusiness(boardId: $boardId) {
      id
      user {
        id
        nickName
      }
    }
  }
`;
