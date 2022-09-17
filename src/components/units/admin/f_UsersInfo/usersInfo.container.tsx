import { useQuery } from "@apollo/client";
import { FETCH_USERS } from "./usersInfo.queries";
import UsersInfoUI from "./usersInfo.presenter";
import * as s from "../../../units/admin/admin.styles";
import { IQuery } from "../../../../commons/types/generated/types";
export default function UsersInfo() {
  const { data } = useQuery<Pick<IQuery, "fetchUsers">>(FETCH_USERS);

  return (
    <s.Wrapper>
      <s.InnerWrapper>
        <s.Box>
          <s.Title>일반회원 정보</s.Title>
          <UsersInfoUI data={data} />
        </s.Box>
      </s.InnerWrapper>
    </s.Wrapper>
  );
}
