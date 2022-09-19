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

export const FETCH_BOARD_PROCESSING_BY_USER = gql`
  query fetchBoardProcessingByUser($page: Int) {
    fetchBoardProcessingByUser(page: $page) {
      id
      title

      status
      price
      createdAt

      dueDate
      image {
        url
      }
      user {
        nickName
      }
    }
  }
`;

export const FETCH_RUNNER_PROCESSING_BY_USER = gql`
  query {
    fetchRuunerProcessingByUser {
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
        image {
          url
        }
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
