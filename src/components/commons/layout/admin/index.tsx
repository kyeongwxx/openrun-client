import CenteredTabs from "../../../../commons/tabs";
import UsersChart from "../../../units/admin/a_UsersChart/usersChart.container";
import * as s from "./admin.styles";
export default function LayoutAdmin() {
  return (
    <s.Wrapper>
      <CenteredTabs
        tabs={[
          "가입자 현황",
          "일반회원 정보",
          "일자별 매출",
          "신고 내역",
          "운영진 정보",
        ]}
        address={[
          "/admin/",
          "/admin/usersInfo",
          "/admin/dailyPayments",
          "/admin/reports",
          "/admin/adminInfo",
        ]}
      />
      <s.InnerWrapper>
        <s.Box>
          <s.Title>가입자 현황</s.Title>
          <UsersChart />
        </s.Box>
      </s.InnerWrapper>
    </s.Wrapper>
  );
}
