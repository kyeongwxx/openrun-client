import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards($dateType: String!, $page: Int) {
    fetchBoards(dateType: $dateType, page: $page) {
      id
      title
      contents
      price
      dueDate
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
