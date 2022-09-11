import { gql } from "@apollo/client";

export const FETCH_CHAT_LOGS = gql`
  query fetchChatLogs($room: String!) {
    fetchChatLogs(room: $room) {
      message
      # room {
      #   room
      #   seller {
      #     id
      #     nickName
      #   }
      #   runner {
      #     id
      #     nickName
      #   }
      #   board {
      #     id
      #   }
      # }
      user {
        id
        nickName
      }
    }
  }
`;
export const FETCH_USER_CHAT_ROOM = gql`
  query fetchUserChatRoom {
    fetchUserChatRoom {
      room
      seller {
        id
        nickName
      }
      runner {
        id
        nickName
      }
      # board {
      #   id
      # }
    }
  }
`;
export const FETCH_LOGIN_USER = gql`
  query fetchLoginUser {
    fetchLoginUser {
      id
      nickName
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
