import { gql } from "@apollo/client";

export const FETCH_USERS_COUNT_BY_DATE = gql`
  query fetchUsersCountByDate {
    fetchUsersCountByDate {
      id
      createdAt
      countByDate
    }
  }
`;
