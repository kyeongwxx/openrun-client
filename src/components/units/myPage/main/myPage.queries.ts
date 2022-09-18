import { gql } from "@apollo/client";

export const FETCH_USER_CHATROOM = gql`
  query {
    fetchUserChatRoom {
      id
      seller {
        nickName
        id
      }
      runner {
        nickName
        id
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
  query {
    fetchBoardProcessingByUser {
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
