import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards($dateType: String!, $page: Int) {
    fetchBoards(dateType: $dateType, page: $page) {
      id
      title
      contents
      # status
      price
      eventDay
      eventTime
      user {
        nickName
      }
      category {
        name
      }
      location {
        address
      }
      image {
        url
      }
    }
  }
`;
