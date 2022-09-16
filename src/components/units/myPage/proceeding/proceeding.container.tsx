import { useMutation, useQuery } from "@apollo/client";
import { Modal, Rate } from "antd";
import { useRef, useState } from "react";

import {
  IMutation,
  IMutationCreateRatingArgs,
  IQuery,
  IQueryFetchPaymentHistoryArgs,
} from "../../../../commons/types/generated/types";

import MypageProceedinglUI from "./proceeding.presenter";
import {
  // COMPLETE_BUSINESS,
  // CREATE_RATING,
  FETCH_PAYMENT_HISTORY,
} from "./proceeding.queries";

export default function MypageProceeding() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchPaymentHistory">,
    IQueryFetchPaymentHistoryArgs
  >(FETCH_PAYMENT_HISTORY);

  const onClickTop = () => {
    scrollRef.current?.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };
  const onFetchMore = () => {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data?.fetchPaymentHistory.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchPaymentHistory)
          return { fetchPaymentHistory: [...prev.fetchPaymentHistory] };
        return {
          fetchPaymentHistory: [
            ...prev.fetchPaymentHistory,
            ...fetchMoreResult?.fetchPaymentHistory,
          ],
        };
      },
    });
  };

  console.log(data?.fetchPaymentHistory);
  return (
    <MypageProceedinglUI
      data={data?.fetchPaymentHistory}
      onFetchMore={onFetchMore}
      onClickTop={onClickTop}
      scrollRef={scrollRef}
    />
  );
}
