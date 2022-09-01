import * as s from "./footer.styles";
export default function LayoutFooter() {
  return (
    <s.Wrapper>
      <s.MenuWrapper>
        <s.Menu>
          <s.H2>1600-0000</s.H2>
          <s.H4>상담시간: 오전 10시~오후 5시</s.H4>
          <s.H5>email: xxx@openrun.com</s.H5>
        </s.Menu>
        <s.Menu>
          <s.InfoWrapper>
            <s.Info>
              <s.InfoP>서비스소개</s.InfoP>
            </s.Info>
            <s.Info>
              <s.InfoP>개인정보 처리방침</s.InfoP>
              <s.InfoP>약관안내</s.InfoP>
              <s.InfoP>윤리경영</s.InfoP>
            </s.Info>
            <s.Info>
              <s.InfoP>공지사항</s.InfoP>
              <s.InfoP>회원혜택</s.InfoP>
              <s.InfoP>자주묻는질문</s.InfoP>
            </s.Info>
          </s.InfoWrapper>
        </s.Menu>
      </s.MenuWrapper>
    </s.Wrapper>
  );
}
