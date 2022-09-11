import * as s from "./admin.styles";
import UsersChart from "./a_UsersChart/usersChart.container";
import DailyPayments from "./b_DailyPayments/dailyPayments.container";
import Reports from "./d_Reports/reports.container";
import AdminInfoUI from "./e_AdminInfo/adminInfo.presenter";
import UsersInfo from "./f_UsersInfo/usersInfo.container";

export default function AdminUI(props) {
  return (
    <s.Wrapper>
      <s.InnerWrapper>
        <s.Box>
          <s.Title>가입자 현황</s.Title>
          {/* <UsersChart /> */}
        </s.Box>

        <s.Box>
          <s.Title>일자별 요약</s.Title>

          <DailyPayments />
        </s.Box>

        <s.Box>
          <s.Title>1:1문의 내역</s.Title>

          <s.Chart></s.Chart>
        </s.Box>

        <s.Box>
          <s.Title>신고 내역</s.Title>

          <Reports />
        </s.Box>

        <s.Box>
          <s.Title>운영진</s.Title>

          <AdminInfoUI />
        </s.Box>

        <s.Box>
          <s.Title>일반 회원</s.Title>

          <UsersInfo />
        </s.Box>
      </s.InnerWrapper>
    </s.Wrapper>
  );
}
