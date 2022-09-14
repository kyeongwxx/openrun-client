import { Container } from "@mui/material";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import * as s from "./layoutMain.styles";
import LayoutMyPage from "./mypage";
import LayoutNavigation from "./navigation";
import LayoutTopBtn from "./topBtn";
interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  const SHOW_MYPAGE = [
    "/myPage/",
    `/myPage/dealList/`,
    `/myPage/favoriteList/`,
    `/myPage/paymentPoint/`,
    `/myPage/writtenBoards/`,
  ];
  const HIDDEN_MYPAGE = ["/"];

  const isShowMyPage = SHOW_MYPAGE.includes(router.asPath);
  const IsHidden = HIDDEN_MYPAGE.includes(router.asPath);
  return (
    <s.Wrapper>
      {!IsHidden && <LayoutNavigation />}
      {!IsHidden && <LayoutHeader />}
      <Container maxWidth="xl">
        {isShowMyPage && <LayoutMyPage />}
        {/* <LayoutTopBtn /> */}

        <div>{props.children}</div>
      </Container>
      <LayoutFooter />
    </s.Wrapper>
  );
}
