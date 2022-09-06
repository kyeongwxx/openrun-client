import { useRecoilState } from "recoil";
import { userInfoValue } from "../../store";
import * as s from "./navigation.styles";

// import MediaQueryPc from "../../../../commons/mediaQuery/mediaQueryStandardPc";
// import MediaQueryTablet from "../../../../commons/mediaQuery/mediaQueryStandardTablet";
// import MediaQueryMobile from "../../../../commons/mediaQuery/mediaQueryStandardMobile";

export default function LayoutNavigation() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoValue);
  console.log(userInfo);
  // const isPc = MediaQueryPc();
  // const isTablet = MediaQueryTablet();
  // const isMobile = MediaQueryMobile();
  return (
    <>
      <s.Wrapper>
        <s.MenuWrapper>
          {/* <s.MenuList /> */}
          {!userInfo ? (
            <s.MenuList>
              <s.Menu>로그인</s.Menu>
              <s.Menu>회원가입</s.Menu>
              <s.Menu>관심글</s.Menu>
              <s.Menu>고객센터</s.Menu>
            </s.MenuList>
          ) : (
            <s.MenuList>
              <s.Menu>{userInfo.nickName}</s.Menu>
              <s.Menu>찜</s.Menu>
              <s.Menu>관심글</s.Menu>
              <s.Menu>고객센터</s.Menu>
            </s.MenuList>
          )}
        </s.MenuWrapper>
      </s.Wrapper>
    </>
  );
}
