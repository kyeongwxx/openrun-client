import * as s from "./navigation.styles";

// import MediaQueryPc from "../../../../commons/mediaQuery/mediaQueryStandardPc";
// import MediaQueryTablet from "../../../../commons/mediaQuery/mediaQueryStandardTablet";
// import MediaQueryMobile from "../../../../commons/mediaQuery/mediaQueryStandardMobile";

export default function LayoutNavigation() {
  // const isPc = MediaQueryPc();
  // const isTablet = MediaQueryTablet();
  // const isMobile = MediaQueryMobile();
  return (
    <>
      <s.Wrapper>
        <s.MenuWrapper>
          {/* <s.MenuList /> */}
          <s.MenuList>
            <s.Menu>로그인</s.Menu>
            <s.Menu>회원가입</s.Menu>
            <s.Menu>관심글</s.Menu>
            <s.Menu>고객센터</s.Menu>
          </s.MenuList>
        </s.MenuWrapper>
      </s.Wrapper>
    </>
  );
}
