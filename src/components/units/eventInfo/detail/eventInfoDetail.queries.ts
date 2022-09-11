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
