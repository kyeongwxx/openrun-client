import { gql } from "@apollo/client";

export const FETCH_PAYMENT_HISTORY = gql`
  query fetchPaymentHistory {
    fetchPaymentHistory {
      id
      price
      status
      user {
        id
        nickName
      }

      board {
        id
        title
        dueDate
        status
        image {
          url
        }
        user {
          nickName
          id
        }
      }
    }
  }
`;

// export const CREATE_RATING = gql`
//   mutation createRating($boardId: String!, $rate: Float!) {
//     createRating(boardId: $boardId, rate: $rate)
//   }
// `;

// export const COMPLETE_BUSINESS = gql`
//   mutation completeBusiness($boardId: String!) {
//     completeBusiness(boardId: $boardId) {
//       id
//       user {
//         id
//         nickName
//       }
//     }
//   }
// `;
