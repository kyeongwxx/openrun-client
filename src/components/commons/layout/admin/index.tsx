import CenteredTabs from "../../../../commons/tabs";
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
          "/admin/usersChart/",
          "/admin/usersInfo/",
          "/admin/dailyPayments/",
          "/admin/reports/",
          "/admin/adminInfo/",
        ]}
      />
    </s.Wrapper>
  );
}
