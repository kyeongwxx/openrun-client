import * as s from "./adminInfo.styles";
import { IAdminInfoUIProps } from "./adminInfo.types";
import { getDate } from "../../../../commons/getDate/utils";

export default function AdminInfoUI(props: IAdminInfoUIProps) {
  return (
    <s.Wrapper>
      <s.Row>
        <s.ColumnHeader>NickName</s.ColumnHeader>
        <s.ColumnHeader>E-mail</s.ColumnHeader>
        <s.ColumnHeader>가입일</s.ColumnHeader>
      </s.Row>
      <s.Scroll>
        {props.data?.fetchAdmin.map((el: any) => (
          <s.Row key={el.id}>
            <s.ColumnBasic>{el.nickName}</s.ColumnBasic>
            <s.ColumnBasic>{el.email}</s.ColumnBasic>
            <s.ColumnBasic>{getDate(el.createdAt)}</s.ColumnBasic>
          </s.Row>
        ))}
      </s.Scroll>
    </s.Wrapper>
  );
}
