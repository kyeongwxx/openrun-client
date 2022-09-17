import { useQuery } from "@apollo/client";
import DailyPaymentsUI from "./dailyPayments.presenter";
import { FETCH_PAYMENTS } from "./dailyPayments.queries";
import * as s from "../../../units/admin/admin.styles";
import { IQuery } from "../../../../commons/types/generated/types";

export default function DailyPayments() {
  const { data } = useQuery<Pick<IQuery, "fetchPayments">>(FETCH_PAYMENTS);
  console.log("payments", data);
  return (
    <s.Wrapper>
      <s.InnerWrapper>
        <s.Box>
          <s.Title>일자별 매출</s.Title>
          <DailyPaymentsUI data={data} />
        </s.Box>
      </s.InnerWrapper>
    </s.Wrapper>
  );
}
