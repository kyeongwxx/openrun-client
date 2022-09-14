import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRef } from "react";

import {
  IQuery,
  IQueryFetchWriteBoardsArgs,
} from "../../../../commons/types/generated/types";

import MypageWrittenBoardsUI from "./writtenBoard.presenter";
import { FETCH_WRITE_BOARDS } from "./writtenBoard.queries";

export default function MypageWrittenBoards() {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchWriteBoards">,
    IQueryFetchWriteBoardsArgs
  >(FETCH_WRITE_BOARDS);
  console.log(data);

  const onClickMoveToDetail = (boardId: string) => () => {
    router.push(`/board/${boardId}`);
  };
  const onClickTop = () => {
    scrollRef.current?.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  const onFetchMore = () => {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data?.fetchWriteBoards.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchWriteBoards)
          return { fetchWriteBoards: [...prev.fetchWriteBoards] };
        return {
          fetchWriteBoards: [
            ...prev.fetchWriteBoards,
            ...fetchMoreResult?.fetchWriteBoards,
          ],
        };
      },
    });
  };
  console.log(data);

  return (
    <MypageWrittenBoardsUI
      onFetchMore={onFetchMore}
      data={data?.fetchWriteBoards}
      onClickMoveToDetail={onClickMoveToDetail}
      onClickTop={onClickTop}
      scrollRef={scrollRef}
    />
  );
}
