import * as s from "./paymentPoint.styles";

import Selector from "../../../../commons/selector";
import { useRecoilState } from "recoil";
import { userInfoValue } from "../../../commons/store";
import { v4 as uuidv4 } from "uuid";
import { IPaymentProps } from "../myPage.types";
import { dateSplit } from "../../../../commons/function/dateSlice";
export default function MypagePaymentPointUI(props: any) {
  const [userInfo] = useRecoilState(userInfoValue);
  return (
    <s.Wrapper>
      <s.PointWrapper>
        <s.PointTitle>포인트</s.PointTitle>
        <s.PointInfo>
          <s.AvailablePoint>
            <s.Text size="1rem" color="#656565" weight="400">
              사용가능한 포인트
            </s.Text>
            <s.Text size="1.5rem" color="#333" weight="700">
              {userInfo?.point}
            </s.Text>
          </s.AvailablePoint>
          <s.ChargePoint onClick={props.onClickChargePoint}>
            <s.Text size="1rem" color="#656565" weight="400">
              포인트 충전
            </s.Text>
          </s.ChargePoint>
        </s.PointInfo>
      </s.PointWrapper>
      <s.DivideLineHorizontal color="#f2f2f2" />
      {props.chargeBtnState ? (
        <s.PaymentWrapper>
          <s.SelectPoint>
            <s.Text size="1rem" color="#333" weight="700">
              충전 금액
            </s.Text>
            <Selector
              title="충전금액"
              sortValue={["100", "10000", "30000", "50000", "100000"]}
            />
          </s.SelectPoint>
          <s.SelectedPointWrapper>
            <s.ChargePoint onClick={props.onClickPayment}>
              <s.Text size="1rem" color="#656565" weight="700">
                결제 하기
              </s.Text>
            </s.ChargePoint>
          </s.SelectedPointWrapper>
        </s.PaymentWrapper>
      ) : (
        <></>
      )}

      <s.PointHistoriesWrapper>
        <s.PointHistories
          pageStart={0}
          loadMore={props.onFetchMore}
          hasMore={true}
          useWindow={false}
        >
          {console.log(props.data)}
          {!props.data ? (
            <s.PointInfo />
          ) : (
            props.data.map((el: any) => (
              <s.PointInfo key={uuidv4()}>
                <s.AvailablePoint>
                  <s.Text size="1rem" color="#656565" weight="400">
                    {el.status === "PAYMENT" ? "충전포인트" : "환불포인트"}
                  </s.Text>
                  <s.Text size="1rem" color="#333" weight="700">
                    {el.amount}P
                  </s.Text>
                </s.AvailablePoint>
                <s.Text size="1rem" color="#656565" weight="400">
                  {dateSplit(el?.createdAt)}
                </s.Text>

                {props.isRefund ? (
                  <s.None />
                ) : el?.status === "PAYMENT" ? (
                  <>
                    <s.RefundPoint
                      onClick={props.onClickRefund(el?.impUid, el?.amount || 0)}
                    >
                      <s.Text size="1rem" color="#656565" weight="400">
                        포인트 환불
                      </s.Text>
                    </s.RefundPoint>
                  </>
                ) : (
                  <s.None />
                )}
                {/* {el.status === "PAYMENT" ? (
                  <>
                    <s.RefundPoint
                      onClick={props.onClickRefund(el.impUid, el.amount)}
                    >
                      <s.Text size="1rem" color="#656565" weight="400">
                        포인트 환불
                      </s.Text>
                    </s.RefundPoint>
                  </>
                ) : (
                  <s.None />
                )} */}
              </s.PointInfo>
            ))
          )}
        </s.PointHistories>
      </s.PointHistoriesWrapper>
    </s.Wrapper>
  );
}
