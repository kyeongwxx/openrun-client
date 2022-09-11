import { v4 as uuidv4 } from "uuid";
import { getDate } from "../../../../commons/getDate/utils";
import * as s from "./reports.styles";
import InfiniteScroll from "react-infinite-scroller";

export default function ReportsUI(props) {
  //:IQueryFetchReports
  return (
    <s.Wrapper>
      <s.Row>
        <s.ColumnHeader>유형</s.ColumnHeader>
        <s.ColumnHeader>상세내용</s.ColumnHeader>
        <s.ColumnHeader>신고당한 유저 id</s.ColumnHeader>
        <s.ColumnHeader>신고한 유저</s.ColumnHeader>
        <s.ColumnHeader>신고 게시글</s.ColumnHeader>
        <s.ColumnHeader>신고 일자</s.ColumnHeader>
      </s.Row>
      {props.data?.fetchReports.map((el: any) => (
        <s.Row key={el.id}>
          <s.ColumnBasic>{String(el.id).slice(-4).toUpperCase()}</s.ColumnBasic>
          <s.ColumnTitle id={el.id}></s.ColumnTitle>
          <s.ColumnBasic>{el.type}</s.ColumnBasic>
          <s.ColumnBasic>{el.contents}</s.ColumnBasic>
          <s.ColumnBasic>{el.id}</s.ColumnBasic>
          <s.ColumnBasic>{el.user}</s.ColumnBasic>
          <s.ColumnBasic>{el.board}</s.ColumnBasic>
          <s.ColumnBasic>{getDate(el.createdAt)}</s.ColumnBasic>
        </s.Row>
      ))}
    </s.Wrapper>
  );
}
