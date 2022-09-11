import * as s from "./dailyPayments.styles";
import { getDate } from "../../../../commons/getDate/utils";

export default function DailyPaymentsUI(props) {
  return (
    <s.Wrapper>
      <s.Row>
        <s.ColumnHeader>일자</s.ColumnHeader>
        <s.ColumnHeader>거래수</s.ColumnHeader>
        <s.ColumnHeader>매출액</s.ColumnHeader>
      </s.Row>
      {/* props fetchPayment, fetchPaymentHistoryCount 가져와서 map 돌려야하는데 두개를 어떻게 한꺼번에 돌리지? */}
      {props.data?.fetchPayments.map((el: any) => (
        <s.Row key={el.id}>
          <s.ColumnBasic>{getDate(el.createdAt)}</s.ColumnBasic>
          <s.ColumnBasic>{el.number}</s.ColumnBasic>
          <s.ColumnBasic>{el.number}</s.ColumnBasic>
        </s.Row>
      ))}
    </s.Wrapper>
  );
}
