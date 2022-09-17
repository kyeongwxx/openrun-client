import ReportsUI from "./reports.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_REPORTS } from "./reports.queries";
import * as s from "../../../units/admin/admin.styles";
import { IQuery } from "../../../../commons/types/generated/types";

export default function Reports() {
  const { data } = useQuery<Pick<IQuery, "fetchReports">>(FETCH_REPORTS);

  return (
    <s.Wrapper>
      <s.InnerWrapper>
        <s.Box>
          <s.Title>신고 내역</s.Title>
          <ReportsUI data={data} />
        </s.Box>
      </s.InnerWrapper>
    </s.Wrapper>
  );
}
