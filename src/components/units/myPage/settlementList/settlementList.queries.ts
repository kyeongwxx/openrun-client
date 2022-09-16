import { gql } from "@apollo/client";

// export const FETCH_PAYMENT_HISTORY = gql`
//   query fetchPaymentHistory($page: Int) {
//     fetchPaymentHistory(page: $page) {
//       id
//       price
//       status
//       user {
//         id
//         nickName
//       }

//       board {
//         id
//         title
//         dueDate
//         status
//         image {
//           url
//         }
//         user {
//           nickName
//           id
//         }
//       }
//     }
//   }
// `;

export const FETCH_BOARD_PROCESSING_BY_USER = gql`
  query {
    fetchBoardProcessingByUser {
      id
      title

      status
      price
      createdAt

      dueDate
      user {
        nickName
      }
    }
  }
`;
