import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

import {
  IQuery,
  IQueryFetchBoardInprocessingByUserArgs,
  IQueryFetchRuunerProcessingByUserArgs,
} from "../../../../commons/types/generated/types";
import MyPageUI from "./myPage.presenter";
import {
  FETCH_BOARD_IN_PROCESSING_BY_USER,
  FETCH_RUNNER_PROCESSING_BY_USER,
  FETCH_USER_CHATROOM,
} from "./myPage.queries";

export default function MyPage() {
  const router = useRouter();
  const { data } =
    useQuery<Pick<IQuery, "fetchUserChatRoom">>(FETCH_USER_CHATROOM);

  // 내가 셀러
  const { data: processingSeller, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardInprocessingByUser">,
    IQueryFetchBoardInprocessingByUserArgs
  >(FETCH_BOARD_IN_PROCESSING_BY_USER);

  // 내가 러너
  const { data: processingRunner, fetchMore: fetchMore2 } = useQuery<
    Pick<IQuery, "fetchRuunerProcessingByUser">,
    IQueryFetchRuunerProcessingByUserArgs
  >(FETCH_RUNNER_PROCESSING_BY_USER);

  const onClickMoveToBoardDetail = (boardId: string) => () => {
    router.push(`/board/${boardId}`);
  };

  const onFetchMore = () => {
    if (!processingSeller) return;
    fetchMore({
      variables: {
        page:
          Math.ceil(
            processingSeller?.fetchBoardInprocessingByUser.length / 10
          ) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchBoardInprocessingByUser)
          return {
            fetchBoardInprocessingByUser: [
              ...prev.fetchBoardInprocessingByUser,
            ],
          };
        return {
          fetchBoardInprocessingByUser: [
            ...prev.fetchBoardInprocessingByUser,
            ...fetchMoreResult?.fetchBoardInprocessingByUser,
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

  return (
    <MyPageUI
      sellerData={processingSeller?.fetchBoardInprocessingByUser}
      runnerData={processingRunner?.fetchRuunerProcessingByUser}
      onFetchMore={onFetchMore}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      onFetchMoreRunner={onFetchMoreRunner}
      chatRoom={data?.fetchUserChatRoom}
    />
  );
}
