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
      runnerTotal
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

export const FETCH_RUNNER = gql`
  query fetchRunner($boardId: String!) {
    fetchRunner(boardId: $boardId) {
      id
      nickName
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

export const CREATE_REPORT = gql`
  mutation createReport($createReportInput: CreateReportInput!) {
    createReport(createReportInput: $createReportInput) {
      id
      contents
    }
  }
`;
