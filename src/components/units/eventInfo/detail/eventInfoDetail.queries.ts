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

// export const FETCH_BOARDS = gql`
// query fetchBaords($dateType:String!, page:Int){
//   fetchBaords(dateType:$dateType, page:$page){
//     id
//     image
//   }
// }
// `;
