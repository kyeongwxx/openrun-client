import { useQuery } from "@apollo/client";
import { Modal } from "antd";
import { MouseEventHandler, useRef } from "react";
import { useRecoilState } from "recoil";
import CompleteRate from "../../../../commons/rate";
import { IQuery } from "../../../../commons/types/generated/types";
import { openValue } from "../../../commons/store";
import MypageDealUI from "./dealList.presenter";
import { FETCH_PAYMENT_HISTORY } from "./dealList.queries";

export default function MypageDealList() {
  const [open, setOpen] = useRecoilState(openValue);
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
  const onClickCompleteModal = (nickName: string) => () => {
    Modal.success({
      title: `${nickName}님 러너 평가`,
      content: <CompleteRate />,
      onOk: () => {
        console.log("dd");
      },
    });
  };
  console.log(open);
  console.log(data);
  return (
    <MypageDealUI
      data={data?.fetchPaymentHistory}
      onFetchMore={onFetchMore}
      onClickCompleteModal={onClickCompleteModal}
      onClickTop={onClickTop}
      scrollRef={scrollRef}
    />
  );
}
