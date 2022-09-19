import { gql } from "@apollo/client";

export const FETCH_NOTIFICATIONS = gql`
  query {
    fetchNotifications {
      id
      contents
      isNew
      # user {
      #   id
      # }
      board {
        id
        title
        status
      }
    }
  }
`;

export const UPDATE_NOTIFICATIONS = gql`
  mutation {
    updateNotifications
  }
`;
