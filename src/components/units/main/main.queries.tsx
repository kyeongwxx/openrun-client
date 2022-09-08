import { gql } from "@apollo/client";

export const FETCH_BEST_OF_USER = gql`
  query fetchBestOfUser {
    id
    nickName
    rating
    # profileImg
  }
`;
