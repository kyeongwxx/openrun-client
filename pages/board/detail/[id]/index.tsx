import { useRouter } from "next/router";
import Head from "next/head";
import { gql, GraphQLClient } from "graphql-request";
import BoardDetail from "../../../../src/components/units/board/detail/boardDetail.container";

export default function BoardDetailPage(props: any) {
  const router = useRouter();

  return (
    <div>
      <BoardDetail />
      <Head>
        <meta property="og:title" content={props?.fetchBoard.title} />
        <meta property="og:description" content={props?.fetchBoard.contents} />
        <meta property="og:image" content={props?.fetchBoard.images?.[0]} />
      </Head>
      <div>
        <div>게시글 상세 페이지. 게시글 ID는 {router.query.boardId}</div>
      </div>
    </div>
  );
}
const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      title
      contents
      images
    }
  }
`;

// 위 코드보다 이 코드가 먼저 시작됨. context는 요청 정보를 가지고 있음.
export const getServerSideProps = async (context: any) => {
  // 여기서 fetchBoard 요청하기. apollo 없이 useQuery 하는 것.
  const graphQLClient = new GraphQLClient(
    "https://backend08.codebootcamp.co.kr/graphql"
  );
  // 프론트 -> 백엔드로 요청하는 부분
  const result = await graphQLClient.request(FETCH_BOARD, {
    boardId: context.query.boardId,
  });

  return {
    props: {
      fetchBoard: {
        title: result.fetchBoard.title,
        contents: result.fetchBoard.contents,
        images: result.fetchBoard.images,
      },
    },
  };
};
