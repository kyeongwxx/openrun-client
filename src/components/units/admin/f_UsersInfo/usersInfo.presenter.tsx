import InfiniteScroll from "react-infinite-scroller";
import { getDate } from "../../../../commons/getDate/utils";
import * as s from "./usersInfo.styles";
import { IUsersInfoUIProps } from "./usersInfo.types";

export default function UsersInfoUI(props: any) {
  console.log(props.data?.fetchUsers);
  return (
    <s.Wrapper>
      <s.Row>
        <s.ColumnHeader>id</s.ColumnHeader>
        <s.ColumnHeader>E-mail</s.ColumnHeader>
        <s.ColumnHeader>가입일</s.ColumnHeader>
        <s.ColumnHeader>게시글 수</s.ColumnHeader>
        <s.ColumnHeader>포인트 충전 횟수</s.ColumnHeader>
      </s.Row>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.FetchMoreResult}
        hasMore={true}
      >
        <s.Scroll>
          {props.data?.fetchUsers.map((el: any) => (
            <s.Row key={el.id}>
              <s.ColumnBasic>{el.nickName}</s.ColumnBasic>
              <s.ColumnBasic>{el.email}</s.ColumnBasic>
              <s.ColumnBasic>{getDate(el.createdAt)}</s.ColumnBasic>
              <s.ColumnBasic>{el.boardTotal}</s.ColumnBasic>
              <s.ColumnBasic>{el.paymentTotal}</s.ColumnBasic>
            </s.Row>
          ))}{" "}
        </s.Scroll>
      </InfiniteScroll>
    </s.Wrapper>
  );
}
