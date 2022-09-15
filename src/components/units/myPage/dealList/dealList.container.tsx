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
  // const [userRate, setUserRate] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { data, fetchMore } = useQuery<Pick<IQuery, "fetchPaymentHistory">>(
    FETCH_PAYMENT_HISTORY
  );
  // const [createRating] = useMutation<
  //   Pick<IMutation, "createRating">,
  //   IMutationCreateRatingArgs
  // >(CREATE_RATING);
  // const [completeBusiness] = useMutation(COMPLETE_BUSINESS);
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
  // const onClickCompleteModal = (nickName: string, boardId: string) => () => {
  //   Modal.success({
  //     title: `${nickName}님 러너 평가`,
  //     content: <Rate onChange={setUserRate} />,
  //     onOk: async () => {
  //       console.log("dd");
  //       try {
  //         const rateResult = await createRating({
  //           variables: {
  //             boardId,
  //             rate: userRate,
  //           },
  //         });
  //         const completeResult = await completeBusiness({
  //           variables: {
  //             boardId,
  //           },
  //           refetchQueries: [{ query: FETCH_PAYMENT_HISTORY }],
  //         });
  //         console.log(rateResult);
  //         console.log(completeResult);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     },
  //   });
  // };
  // console.log(userRate);

  console.log(data);
  return (
    <MypageDealUI
      data={data?.fetchPaymentHistory}
      onFetchMore={onFetchMore}
      // onClickCompleteModal={onClickCompleteModal}
      onClickTop={onClickTop}
      scrollRef={scrollRef}
    />
  );
}
