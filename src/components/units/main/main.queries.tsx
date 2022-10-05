import { gql } from "@apollo/client";

export const FETCH_BEST_OF_USER = gql`
  query {
    fetchBestOfUser {
      id
      nickName
      rating
      profileImg
      successRate
    }
  }
`;

export const FETCH_BEST_OF_BOARDS = gql`
  query fetchBestOfBoards($category: String) {
    fetchBestOfBoards(category: $category) {
      id
      title
      price
      interestCount
      dueDate
      status
      runnerTotal
      location {
        address
      }
      category {
        name
      }
      user {
        nickName
      }
      image {
        url
      }
    }
  }
`;

export const FETCH_EVENTS_BY_DATE = gql`
  query fetchEventsByDate($date: DateTime) {
    fetchEventsByDate(date: $date) {
      id
      title
      brand
      image
      period
      location
    }
  }
`;
