import { Container } from "@mui/material";
import { ReactNode } from "react";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import * as s from "./layoutMain.styles";

import LayoutNavigation from "./navigation";
interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  return (
    <s.Wrapper>
      <Container maxWidth="xl" style={{ backgroundColor: "skyblue" }}>
        <LayoutHeader />
        {/* <LayoutNavigation /> */}
        <div>{props.children}</div>
        <LayoutFooter />
      </Container>
    </s.Wrapper>
  );
}
