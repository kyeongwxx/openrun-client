import { useQuery } from "@apollo/client";

import { useRef } from "react";
import {
  IQuery,
  IQueryFetchPaymentHistoryArgs,
} from "../../../../commons/types/generated/types";

import MypageSettlementListUI from "./settlementList.presenter";
import { FETCH_PAYMENT_HISTORY } from "./settlementList.queries";

export default function MypageSettlementList() {
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

  return (
    <MypageSettlementListUI
      data={data?.fetchPaymentHistory}
      onFetchMore={onFetchMore}
      onClickTop={onClickTop}
      scrollRef={scrollRef}
    />
  );
}
