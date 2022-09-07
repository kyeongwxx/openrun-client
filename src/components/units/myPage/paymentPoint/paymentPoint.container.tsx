import { useState } from "react";
import { useRecoilState } from "recoil";
import { selectorValue, userInfoValue } from "../../../commons/store";
import MypagePaymentPointUI from "./paymentPoint.presenter";
import { v4 as uuidv4 } from "uuid";
import Head from "next/head";
import { useApolloClient, useMutation, useQuery } from "@apollo/client";
import {
  CHARGE_PAYMENT,
  FETCH_POINT_CHARGE_HISTORY,
} from "./paymentPoint.queries";
import {
  IMutation,
  IMutationChargePaymentArgs,
  IQuery,
} from "../../../../commons/types/generated/types";
import { string } from "yup";
declare const window: typeof globalThis & {
  IMP: any;
};

export default function MypagePaymentPoint() {
  const [sortValue] = useRecoilState(selectorValue);
  const [userInfo] = useRecoilState(userInfoValue);
  const [chargeBtnState, setChargeBtnState] = useState(false);
  const client = useApolloClient();
  const [chargePayment] = useMutation<
    Pick<IMutation, "chargePayment">,
    IMutationChargePaymentArgs
  >(CHARGE_PAYMENT);
  const { data } = useQuery<Pick<IQuery, "fetchPointChargeHistory">>(
    FETCH_POINT_CHARGE_HISTORY
  );
  console.log(data);

  const onClickChargePoint = () => {
    setChargeBtnState(!chargeBtnState);
  };
  const onClickPayment = async () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp16640611"); // Example: imp00000000

    await IMP.request_pay(
      {
        // param
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
          console.log(impUid);
          const result = await chargePayment({
            variables: {
              impUid: String(impUid),
              amount: Number(sortValue),
            },
          });

          console.log(result);
        } else {
          // 결제 실패 시 로직,
          alert("결제를 취소했습니다.");
        }
      }
    );
  };
  const onFetchMore = () => {};
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
        chargeBtnState={chargeBtnState}
        onClickPayment={onClickPayment}
      />
    </>
  );
}
