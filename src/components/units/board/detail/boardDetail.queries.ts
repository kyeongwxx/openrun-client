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
      image {
        url
      }
      user {
        id
      }
    }
  }
`;
export const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: String!) {
    deleteBoard(boardId: $boardId)
  }
`;
export const APPLY_RUNNER = gql`
  mutation applyRunner($boardId: String!) {
    applyRunner(boardId: $boardId) {
      id
      isChecked
      user {
        id
        nickName
      }
      board {
        id
      }
    }
  }
`;
export const ADOPT_RUNNER = gql`
  mutation adoptRunner($userId: String!, $boardId: String!) {
    adoptRunner(userId: $userId, boardId: $boardId) {
      id
      isChecked
      user {
        id
        nickName
      }
    }
  }
`;
export const FETCH_RUNNER_BY_BOARD = gql`
  query fetchRunnerByBoard($boardId: String!) {
    fetchRunnerByBoard(boardId: $boardId) {
      id
      isChecked
      user {
        id
        nickName
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
export const ADD_INTEREST_LIST = gql`
  mutation addInterestList($boardId: String!) {
    addInterestList(boardId: $boardId)
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
