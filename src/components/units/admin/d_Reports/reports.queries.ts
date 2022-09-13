import { gql } from "@apollo/client";

export const FETCH_REPORTS = gql`
  query fetchReports {
    fetchReports {
      id
      type {
        TrashTalk
        Adv
        MissionFailed
        Etc
      }
      contents
      createdAt
      deletedAt
      user {
        id
        email
        nickName
        rating
        successRate
        report
        createdAt
      }
      board
    }
  }
`;
