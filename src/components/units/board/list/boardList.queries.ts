import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards($dateType: String!, $page: Int) {
    fetchBoards(dateType: $dateType, page: $page) {
      id
      title
      contents
      status
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

export const FETCH_EVENTS = gql`
  query fetchEvents($search: String) {
    fetchEvents(search: $search) {
      id
      title
      contents
      image
    }
  }
`;
