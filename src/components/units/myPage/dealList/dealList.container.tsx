import { useMutation, useQuery } from "@apollo/client";
import { Modal, Rate } from "antd";
import { useRef, useState } from "react";

import {
  IMutation,
  IMutationCreateRatingArgs,
  IQuery,
} from "../../../../commons/types/generated/types";

import MypageDealUI from "./dealList.presenter";
import {
  // COMPLETE_BUSINESS,
  // CREATE_RATING,
  FETCH_PAYMENT_HISTORY,
} from "./dealList.queries";

export default function MypageDealList() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { data, fetchMore } = useQuery<Pick<IQuery, "fetchPaymentHistory">>(
    FETCH_PAYMENT_HISTORY
  );

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
    <MypageDealUI
      data={data?.fetchPaymentHistory}
      onFetchMore={onFetchMore}
      onClickTop={onClickTop}
      scrollRef={scrollRef}
    />
  );
}
