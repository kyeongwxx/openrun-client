import { gql } from "@apollo/client";

export const FETCH_REPORTS = gql`
  query fetchReports {
    fetchReports {
      id
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

//신고를 한 유저 : user
//id 리포트 아이디
