import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRef } from "react";
import {
  IQuery,
  IQueryFetchBoardProcessingByUserArgs,
  IQueryFetchRuunerProcessingByUserArgs,
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

  // 내가 셀러
  const { data: processingSeller, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardProcessingByUser">,
    IQueryFetchBoardProcessingByUserArgs
  >(FETCH_BOARD_PROCESSING_BY_USER);

  // 내가 러너
  const { data: processingRunner, fetchMore: fetchMore2 } = useQuery<
    Pick<IQuery, "fetchRuunerProcessingByUser">,
    IQueryFetchRuunerProcessingByUserArgs
  >(FETCH_RUNNER_PROCESSING_BY_USER);

  const onClickMoveToBoardDetail = (boardId: string) => () => {
    console.log(boardId);
    router.push(`/board/${boardId}`);
  };

  const onFetchMore = () => {
    if (!processingSeller) return;
    fetchMore({
      variables: {
        page:
          Math.ceil(processingSeller?.fetchBoardProcessingByUser.length / 10) +
          1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchBoardProcessingByUser)
          return {
            fetchBoardProcessingByUser: [...prev.fetchBoardProcessingByUser],
          };
        return {
          fetchBoardProcessingByUser: [
            ...prev.fetchBoardProcessingByUser,
            ...fetchMoreResult?.fetchBoardProcessingByUser,
          ],
        };
      },
    });
  };

  const onFetchMoreRunner = () => {
    if (!processingRunner) return;
    fetchMore2({
      variables: {
        page:
          Math.ceil(processingRunner?.fetchRuunerProcessingByUser.length / 10) +
          1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchRuunerProcessingByUser)
          return {
            fetchRuunerProcessingByUser: [...prev.fetchRuunerProcessingByUser],
          };
        return {
          fetchRuunerProcessingByUser: [
            ...prev.fetchRuunerProcessingByUser,
            ...fetchMoreResult?.fetchRuunerProcessingByUser,
          ],
        };
      },
    });
  };

  console.log(processingSeller);
  console.log(processingRunner);
  return (
    <MyPageUI
      sellerData={processingSeller?.fetchBoardProcessingByUser}
      runnerData={processingRunner?.fetchRuunerProcessingByUser}
      onFetchMore={onFetchMore}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      onFetchMoreRunner={onFetchMoreRunner}
      chatRoom={data?.fetchUserChatRoom}
    />
  );
}
