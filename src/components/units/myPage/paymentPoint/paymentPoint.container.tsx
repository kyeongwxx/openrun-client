import { useState } from "react";
import { useRecoilState } from "recoil";
import { selectorValue, userInfoValue } from "../../../commons/store";
import MypagePaymentPointUI from "./paymentPoint.presenter";
import { v4 as uuidv4 } from "uuid";
import Head from "next/head";
import { useMutation, useQuery } from "@apollo/client";
import {
  CANCEL_PAYMENT,
  CHARGE_PAYMENT,
  FETCH_POINT_CHARGE_HISTORY,
} from "./paymentPoint.queries";
import {
  IMutation,
  IMutationCancelPaymentArgs,
  IMutationChargePaymentArgs,
  IQuery,
  IQueryFetchPointChargeHistoryArgs,
} from "../../../../commons/types/generated/types";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function MypagePaymentPoint() {
  const [sortValue] = useRecoilState(selectorValue);
  const [userInfo] = useRecoilState(userInfoValue);
  const [isRefund, setIsRefund] = useState("");
  const [chargeBtnState, setChargeBtnState] = useState(false);
  const [refundState, setRefundState] = useState<any>("");

  const [chargePayment] = useMutation<
    Pick<IMutation, "chargePayment">,
    IMutationChargePaymentArgs
  >(CHARGE_PAYMENT);
  const [cancelPayment] = useMutation<
    Pick<IMutation, "cancelPayment">,
    IMutationCancelPaymentArgs
  >(CANCEL_PAYMENT);
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchPointChargeHistory">,
    IQueryFetchPointChargeHistoryArgs
  >(FETCH_POINT_CHARGE_HISTORY);

  // 포인트 충전 div 열고 닫기
  const onClickChargePoint = () => {
    setChargeBtnState(!chargeBtnState);
  };

  const onClickOpenRefund = () => {
    setRefundState(!refundState);
  };
  const onClickPayment = async () => {
    const IMP = window.IMP;
    IMP.init("imp16640611");

    await IMP.request_pay(
      {
        pg: "nice",
        pay_method: "card",
        merchant_uid: `ORD20180131-00000${uuidv4()}`,
        name: "오픈런 포인트 충전",
        amount: Number(sortValue),
        buyer_email: userInfo.email,
        buyer_name: userInfo.nickName,
        buyer_tel: userInfo.phone,
        m_redirect_url: "http://localhost:3000/",
      },
      async (rsp: any) => {
        if (rsp.success) {
          const impUid = rsp.imp_uid;
          const result = await chargePayment({
            variables: {
              impUid: String(impUid),
              amount: Number(sortValue),
            },
            refetchQueries: [{ query: FETCH_POINT_CHARGE_HISTORY }],
          });
        } else {
          // 결제 실패 시 로직,
          alert("결제를 취소했습니다.");
        }
      }
    );
  };
  const onFetchMore = () => {
    if (!data) return;
    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchPointChargeHistory.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchPointChargeHistory)
          return { fetchPaymentHistory: [...prev.fetchPointChargeHistory] };
        return {
          fetchPointChargeHistory: [
            ...prev.fetchPointChargeHistory,
            ...fetchMoreResult?.fetchPointChargeHistory,
          ],
        };
      },
    });
  };

  const onClickRefund = (impUid: string, amount: number) => async () => {
    try {
      const result = await cancelPayment({
        variables: {
          impUid,
          amount,
        },
        refetchQueries: [{ query: FETCH_POINT_CHARGE_HISTORY }],
      });

      setIsRefund(result.data?.cancelPayment.impUid || "");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <Head>
          <script
            type="text/javascript"
            src="https://code.jquery.com/jquery-1.12.4.min.js"
          ></script>

          <script
            type="text/javascript"
            src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
          ></script>
        </Head>
      </div>
      <MypagePaymentPointUI
        onFetchMore={onFetchMore}
        onClickChargePoint={onClickChargePoint}
        onClickRefund={onClickRefund}
        chargeBtnState={chargeBtnState}
        onClickPayment={onClickPayment}
        data={data?.fetchPointChargeHistory}
        isRefund={isRefund}
        onClickOpenRefund={onClickOpenRefund}
        refundState={refundState}
      />
    </>
  );
}
