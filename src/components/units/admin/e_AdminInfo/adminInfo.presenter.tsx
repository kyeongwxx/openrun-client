import * as s from "./adminInfo.styles";
import { IAdminInfoUIProps } from "./adminInfo.types";

export default function AdminInfoUI(props: IAdminInfoUIProps) {
  return (
    <s.Wrapper>
      <s.Row>
        <s.ColumnHeader>회원 유형</s.ColumnHeader>
        <s.ColumnHeader>id</s.ColumnHeader>
        <s.ColumnHeader>E-mail</s.ColumnHeader>
        <s.ColumnHeader>가입일</s.ColumnHeader>
      </s.Row>
      {props.data?.fetchAdmin.map((el: any) => (
        <s.Row key={el.id}>
          <s.ColumnBasic>{el.type}</s.ColumnBasic>
          <s.ColumnBasic>{el.id}</s.ColumnBasic>
          <s.ColumnBasic>{el.email}</s.ColumnBasic>
          <s.ColumnBasic>{el.id}</s.ColumnBasic>
        </s.Row>
      ))}
    </s.Wrapper>
  );
}
