import { gql } from "@apollo/client";

export const FETCH_USER_CHATROOM = gql`
  query {
    fetchUserChatRoom {
      room
      seller {
        nickName
      }
      runner {
        nickName
      }
      board {
        id
        title
        price
        status
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
