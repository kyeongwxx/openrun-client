import { useMutation, useQuery } from "@apollo/client";
import { Modal, Rate } from "antd";
import { useRef, useState } from "react";

import {
  IMutation,
  IMutationCreateRatingArgs,
  IQuery,
  IQueryFetchPaymentHistoryArgs,
} from "../../../../commons/types/generated/types";
import MypageSettlementListUI from "./settlementList.presenter";
import { FETCH_BOARD_PROCESSING_BY_USER } from "./settlementList.queries";

export default function MypageSettlementList() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { data, fetchMore } = useQuery(FETCH_BOARD_PROCESSING_BY_USER);

  const onClickTop = () => {
    scrollRef.current?.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };
  const onFetchMore = () => {
    // if (!data) return;
    // fetchMore({
    //   variables: { page: Math.ceil(data?.fetchPaymentHistory.length / 10) + 1 },
    //   updateQuery: (prev, { fetchMoreResult }) => {
    //     if (!fetchMoreResult?.fetchPaymentHistory)
    //       return { fetchPaymentHistory: [...prev.fetchPaymentHistory] };
    //     return {
    //       fetchPaymentHistory: [
    //         ...prev.fetchPaymentHistory,
    //         ...fetchMoreResult?.fetchPaymentHistory,
    //       ],
    //     };
    //   },
    // });
  };

  console.log(data);
  return (
    <MypageSettlementListUI
      data={data?.fetchBoardProcessingByUser}
      onFetchMore={onFetchMore}
      onClickTop={onClickTop}
      scrollRef={scrollRef}
    />
  );
}
