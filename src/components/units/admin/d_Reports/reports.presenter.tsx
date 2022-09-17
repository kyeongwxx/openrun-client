import { v4 as uuidv4 } from "uuid";
import { getDate } from "../../../../commons/getDate/utils";
import * as s from "./reports.styles";
import InfiniteScroll from "react-infinite-scroller";

export default function ReportsUI(props) {
  console.log(props.data?.fetchReports);
  return (
    <s.Wrapper>
      <s.Row>
        <s.ColumnHeader>신고 일자</s.ColumnHeader>
        <s.ColumnHeader>신고게시글</s.ColumnHeader>
        {/* 신고게시글 누르면 상세내역 나오는걸로 (모여모여참고) */}
        <s.ColumnHeader>처리상태</s.ColumnHeader>
      </s.Row>
      <s.Scroll>
        {props.data?.fetchReports.map((el: any) => (
          <s.Row key={el.id}>
            <s.ColumnBasic>{getDate(el.createdAt)}</s.ColumnBasic>
            <s.ColumnBasic>{el.id}</s.ColumnBasic>
            <s.ColumnBasic>{el.board}</s.ColumnBasic>
            <s.ColumnBasic>{el.contents}</s.ColumnBasic>
            {/* <s.ColumnBtn>미처리/ 처리완료버튼</s.ColumnBtn> */}
          </s.Row>
        ))}
      </s.Scroll>
    </s.Wrapper>
  );
}
