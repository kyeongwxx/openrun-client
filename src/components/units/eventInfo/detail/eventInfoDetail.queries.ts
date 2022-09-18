import { gql } from "@apollo/client";

export const FETCH_EVENT = gql`
  query fetchEvent($eventId: String!) {
    fetchEvent(eventId: $eventId) {
      id
      title
      contents
      period
      location
      image
      createdAt
    }
  }
`;

export const FETCH_EVENT_BY_DATE = gql`
  query fetchEventByEvent($date: DateTime!) {
    fetchEventByEvent(date: $date) {
      id
      title
      contents
      period
      location
      image
      createdAt
    }
  }
`;
export const FETCH_BOARD = gql`
  query fetchBoard($boardId: String!) {
    fetchBoard(boardId: $boardId) {
      id
      image
    }
  }
`;
