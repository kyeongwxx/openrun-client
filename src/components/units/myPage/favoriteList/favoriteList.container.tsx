import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IQuery } from "../../../../commons/types/generated/types";
import MypageFavoriteListUI from "./favoriteList.presenter";
import { FETCH_INTEREST_BOARDS } from "./favoriteList.queries";

export default function MypageFavoriteList() {
  const router = useRouter();
  const { data, fetchMore } = useQuery(FETCH_INTEREST_BOARDS);
  const onFetchMore = () => {
    // if (!data) return;
    // fetchMore({
    //   variables: { page: Math.ceil(data?.fetchPaymentHistory.length / 10) + 1 },
    //   updateQuery: (prev, { fetchMoreResult }) => {
    //     if (!fetchMoreResult?.fetchPaymentHistory)
    //       return { fetchPaymentHistory: [...prev.fetchPaymentHistory] };
    //     return {
    //       fetchWriteBoards: [
    //         ...prev.fetchPaymentHistory,
    //         ...fetchMoreResult?.fetchPaymentHistory,
    //       ],
    //     };
    //   },
    // });
  };
  const onClickMoveToBoardDetail = (boardId: string) => () => {
    router.push(`/board/${boardId}`);
  };

  console.log(data);
  return (
    <MypageFavoriteListUI
      data={data?.fetchInterestBoards}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      onFetchMore={onFetchMore}
    />
  );
}
