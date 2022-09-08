import { gql } from "@apollo/client";

export const FETCH_CHAT_LOGS = gql`
  query fetchChatLogs($room: String!) {
    fetchChatLogs(room: $room) {
      message
      room {
        room
        seller
        runner
        board {
          id
        }
      }
      user {
        nickName
      }
    }
  }
`;
