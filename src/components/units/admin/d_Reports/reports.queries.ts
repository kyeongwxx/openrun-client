import { gql } from "@apollo/client";

export const FETCH_REPORTS = gql`
  query fetchReports {
    fetchReports {
      id
      contents
      createdAt
      board
    }
  }
`;
