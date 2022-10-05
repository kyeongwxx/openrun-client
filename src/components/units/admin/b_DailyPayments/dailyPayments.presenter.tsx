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
      <s.Scroll>
        {props.data?.fetchPayments.map((el: any) => (
          <s.Row key={el.id}>
            <s.ColumnBasic>{el.id}</s.ColumnBasic>
            <s.ColumnBasic>{el.count}</s.ColumnBasic>
            <s.ColumnBasic>{el.amount}</s.ColumnBasic>
          </s.Row>
        ))}{" "}
      </s.Scroll>
    </s.Wrapper>
  );
}
