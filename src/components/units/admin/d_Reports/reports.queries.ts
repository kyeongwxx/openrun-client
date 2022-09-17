import { gql } from "@apollo/client";

export const FETCH_REPORTS = gql`
  query fetchReports {
    fetchReports {
      id
      contents
      createdAt
      board {
        contents
        createdAt
      }
    }
  }
`;

//신고를 한 유저 : user
//id 리포트 아이디

//백엔드 수정 기다리는중
