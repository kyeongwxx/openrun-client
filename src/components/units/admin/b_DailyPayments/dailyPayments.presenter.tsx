import * as s from "./dailyPayments.styles";
import { getDate } from "../../../../commons/getDate/utils";

export default function DailyPaymentsUI(props: any) {
  return (
    <s.Wrapper>
      <s.Row>
        <s.ColumnHeader>일자</s.ColumnHeader>
        <s.ColumnHeader>거래수</s.ColumnHeader>
        <s.ColumnHeader>매출액</s.ColumnHeader>
      </s.Row>
      {props.data?.fetchPayments}
      {/* {props.data?.fetchPayments.map((el: any) => (
        <s.Row key={el.id}>
          <s.ColumnBasic>{getDate(el.createdAt)}</s.ColumnBasic>
        </s.Row>
      ))} */}
    </s.Wrapper>
  );
}
