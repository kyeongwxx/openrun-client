import InfiniteScroll from "react-infinite-scroller";
import * as s from "./usersInfo.styles";
import { IUsersInfoPresenterProps } from "./usersInfo.types";

export default function UsersInfoUI(props: IUsersInfoPresenterProps) {
  console.log(props.data?.fetchUsers);
  return (
    <s.Wrapper>
      <s.Row>
        <s.ColumnHeader>회원 유형</s.ColumnHeader>
        <s.ColumnHeader>id</s.ColumnHeader>
        <s.ColumnHeader>E-mail</s.ColumnHeader>
        <s.ColumnHeader>가입일</s.ColumnHeader>
        <s.ColumnHeader>게시글 수</s.ColumnHeader>
        <s.ColumnHeader>적립금</s.ColumnHeader>
        <s.ColumnHeader>누적 구매액</s.ColumnHeader>
      </s.Row>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.FetchMoreResult}
        hasMore={true}
      >
        {props.data?.fetchUsers.map((el: any) => (
          <s.Row key={el.id}>
            <s.ColumnBasic>{el.isAdmin}</s.ColumnBasic>
            <s.ColumnBasic>{el.id}</s.ColumnBasic>
            <s.ColumnBasic>{el.email}</s.ColumnBasic>
            <s.ColumnBasic>{el.createdAt}</s.ColumnBasic>
            <s.ColumnBasic>{el.boardTotal}</s.ColumnBasic>
            <s.ColumnBasic>{el.paymentTotal}</s.ColumnBasic>
            <s.ColumnBasic>{el.fetchPayments}</s.ColumnBasic>
          </s.Row>
        ))}
      </InfiniteScroll>
    </s.Wrapper>
  );
}
