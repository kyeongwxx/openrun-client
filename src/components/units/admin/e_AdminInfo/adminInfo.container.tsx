import { useQuery } from "@apollo/client";
import AdminInfoUI from "./adminInfo.presenter";
import { FETCH_ADMIN } from "./adminInfo.queries";
import * as s from "../../../units/admin/admin.styles";
import { IQuery } from "../../../../commons/types/generated/types";

export default function AdminInfo() {
  const { data } = useQuery<Pick<IQuery, "fetchAdmin">>(FETCH_ADMIN);

  return (
    <s.Wrapper>
      <s.InnerWrapper>
        <s.Box>
          <s.Title>운영진 정보</s.Title>
          <AdminInfoUI data={data} />
        </s.Box>
      </s.InnerWrapper>
    </s.Wrapper>
  );
}
