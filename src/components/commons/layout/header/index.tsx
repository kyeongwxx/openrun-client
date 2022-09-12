import * as s from "./header.styles";

import Logo from "../../../../../public/Logo.svg";

import { useRouter } from "next/router";

export default function LayoutHeader() {
  const router = useRouter();
  const onClickMoveToPage = () => {
    location.replace("/main/");
  };
  return (
    <s.Wrapper>
      <s.MenuWrapper>
        <s.Logo>
          <Logo onClick={onClickMoveToPage} />
        </s.Logo>
        <s.MenuList>
          <s.Menu>LIST</s.Menu>
          <s.Menu>POST</s.Menu>
          <s.Menu>NEWS</s.Menu>
        </s.MenuList>
      </s.MenuWrapper>
    </s.Wrapper>
  );
}
