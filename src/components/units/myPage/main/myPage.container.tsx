import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRef } from "react";
import {
  IQuery,
  IQueryFetchRunnerByBoardArgs,
} from "../../../../commons/types/generated/types";
import MyPageUI from "./myPage.presenter";
import {
  FETCH_BOARD_PROCESSING_BY_USER,
  FETCH_RUNNER_PROCESSING_BY_USER,
  FETCH_USER_CHATROOM,
} from "./myPage.queries";

export default function MyPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USER_CHATROOM);

  console.log(data);
  const { data: processingSeller, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardProcessingByUser">
  >(FETCH_BOARD_PROCESSING_BY_USER);

  const { data: processingRunner } = useQuery<
    Pick<IQuery, "fetchRuunerProcessingByUser">,
    IQueryFetchRunnerByBoardArgs
  >(FETCH_RUNNER_PROCESSING_BY_USER);

  const onClickMoveToBoardDetail = (boardId: string) => () => {
    console.log(boardId);
    router.push(`/board/${boardId}`);
  };

  const onFetchMore = () => {
    // if (!data) return;
    // fetchMore({
    //   variables: { page: Math.ceil(data?.fetchInterestBoards.length / 10) + 1 },
    //   updateQuery: (prev, { fetchMoreResult }) => {
    //     if (!fetchMoreResult?.fetchInterestBoards)
    //       return { fetchInterestBoards: [...prev.fetchInterestBoards] };
    //     return {
    //       fetchInterestBoards: [
    //         ...prev.fetchInterestBoards,
    //         ...fetchMoreResult?.fetchInterestBoards,
    //       ],
    //     };
    //   },
    // });
  };

  console.log(processingSeller);
  console.log(processingRunner);
  return (
    <MyPageUI
      sellerData={processingSeller?.fetchBoardProcessingByUser}
      runnerData={processingRunner?.fetchRuunerProcessingByUser}
      onFetchMore={onFetchMore}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
    />
  );
}
