import { gql } from "@apollo/client";

export const FETCH_USER_CHATROOM = gql`
  query {
    fetchUserChatRoom {
      id
      seller {
        nickName
        id
        profileImg
      }
      runner {
        nickName
        id
        profileImg
      }
      board {
        id
        title
        status
        price
        dueDate
      }
    }
  }
`;

export const FETCH_BOARD_IN_PROCESSING_BY_USER = gql`
  query fetchBoardInprocessingByUser($page: Int) {
    fetchBoardInprocessingByUser(page: $page) {
      id
      title

      status
      price
      createdAt

      dueDate
      image
      user {
        nickName
      }
    }
  }
`;

export const FETCH_RUNNER_PROCESSING_BY_USER = gql`
  query fetchRuunerProcessingByUser($page: Int) {
    fetchRuunerProcessingByUser(page: $page) {
      id
      isChecked
      user {
        nickName
      }
      board {
        id
        title
        price
        dueDate
        image
        location {
          address
          addressDetail
        }
        user {
          nickName
        }
      }
    }
  }
`;
