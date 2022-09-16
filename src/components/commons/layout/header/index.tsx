import * as s from "./header.styles";

import Logo from "../../../../../public/Logo.svg";

import { useRouter } from "next/router";
import TemporaryDrawer from "../../../../commons/drawer";
import MediaQueryPc from "../../../../commons/mediaQuery/mediaQueryStandardPc";
import MediaQueryMobile from "../../../../commons/mediaQuery/mediaQueryStandardMobile";
import { useRecoilState } from "recoil";
import { accessTokenState, logoutState, userInfoValue } from "../../store";
import { useMutation } from "@apollo/client";
import { IMutation } from "../../../../commons/types/generated/types";
import { LOGOUT } from "../layout.queries";

export default function LayoutHeader() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoValue);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [isLogout, setIsLogout] = useRecoilState(logoutState);

  const [logout] = useMutation<Pick<IMutation, "logout">>(LOGOUT);
  const isPc = MediaQueryPc();
  const isMobile = MediaQueryMobile();
  const router = useRouter();
  const onClickMoveToPage = (pageName: string) => () => {
    location.replace(pageName);
  };
  const onClickLogout = async () => {
    try {
      const result = await logout();

      if (result) {
        setAccessToken(" ");
        setIsLogout(true);
        router.push("/main");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <s.Wrapper>
      <s.MenuWrapper>
        {isPc && (
          <>
            <s.Logo>
              <Logo onClick={onClickMoveToPage("/main/")} />
            </s.Logo>

            <s.MenuList>
              <s.Menu onClick={onClickMoveToPage("/board")}>LIST</s.Menu>
              <s.Menu onClick={onClickMoveToPage("/board/new/")}>POST</s.Menu>
            </s.MenuList>
          </>
        )}
        {isMobile && (
          <s.ForMobileWrapper>
            <TemporaryDrawer
              userInfo={userInfo}
              onClickLogout={onClickLogout}
            />
            <Logo onClick={onClickMoveToPage("/main/")} />
          </s.ForMobileWrapper>
        )}
      </s.MenuWrapper>
    </s.Wrapper>
  );
}
