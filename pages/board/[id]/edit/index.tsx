import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWrite from "../../../../src/components/units/board/write/boardWrite.container";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: String!) {
    fetchBoard(boardId: $boardId) {
      id
      title
      contents
      status
      price
      eventDay
      eventTime
      category {
        name
      }
      location {
        zipcode
        address
        addressDetail
      }
      image {
        url
      }
    }
  }
`;

export default function BoardEditPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.id },
  });
  console.log(router.query.id);
  return <BoardWrite data={data} isEdit={true} />;
}
