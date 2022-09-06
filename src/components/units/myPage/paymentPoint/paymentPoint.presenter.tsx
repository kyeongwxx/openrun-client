import * as s from "./paymentPoint.styles";
import InfiniteScroll from "react-infinite-scroller";
import Selector from "../../../../commons/selector";
import { useRecoilState } from "recoil";
import { selectorValue } from "../../../commons/store";
export default function MypagePaymentPointUI(props) {
  const [sortValue, setSortValue] = useRecoilState(selectorValue);
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
              1000P
            </s.Text>
          </s.AvailablePoint>
          <s.ChargePoint onClick={props.onClickChargePoint}>
            <s.Text size="1rem" color="#656565" weight="400">
              포인트 충전하기
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
            <s.Text size="1.5rem" color="#333" weight="700">
              {sortValue}
            </s.Text>
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

      <s.PointHistories>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onFetchMore}
          hasMore={true}
          useWindow={false}
        >
          <s.PointInfo>
            <s.AvailablePoint>
              <s.Text size="1rem" color="#656565" weight="400">
                충전포인트
              </s.Text>
              <s.Text size="1rem" color="#333" weight="700">
                1000P
              </s.Text>
            </s.AvailablePoint>
            <s.Text size="1rem" color="#656565" weight="400">
              2022.ㅌㅌ.ㅌㅌ
            </s.Text>
          </s.PointInfo>
        </InfiniteScroll>
      </s.PointHistories>
    </s.Wrapper>
  );
}
