import { v4 as uuidv4 } from "uuid";
import { getDate } from "../../../../commons/getDate/utils";
import * as s from "./reports.styles";
import { IReportsUIProps } from "./reports.types";

export default function ReportsUI(props: IReportsUIProps) {
  return (
    <s.Wrapper>
      <s.Row>
        <s.ColumnHeader>신고 일자</s.ColumnHeader>
        <s.ColumnHeader>신고 게시글</s.ColumnHeader>
        <s.ColumnHeader>신고 내용</s.ColumnHeader>
      </s.Row>
      <s.Scroll>
        {props.data?.fetchReports.map((el: any) => (
          <s.Row key={el.id}>
            <s.ColumnBasic>{getDate(el.createdAt)}</s.ColumnBasic>\{" "}
            <s.ColumnBasic>{el.board}</s.ColumnBasic>
            <s.ColumnBasic>{el.contents}</s.ColumnBasic>
          </s.Row>
        ))}
      </s.Scroll>
    </s.Wrapper>
  );
}
