import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardListUI from "./boardList.presenter";
import { FETCH_BOARDS } from "./boardList.queries";

export default function BoardList() {
  const router = useRouter();
  const { data, refetch, fetchMore } = useQuery(FETCH_BOARDS, {
    variables: { dateType: "최신순", page: 1 },
  });
  console.log(data);

  // infinite-scroll 함수
  const onFetchMore = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data?.fetchBoards.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoards)
          return { fetchBoards: [...prev.fetchBoards] };

        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  return (
    <BoardListUI data={data} refetch={refetch} onFetchMore={onFetchMore} />
  );
}
