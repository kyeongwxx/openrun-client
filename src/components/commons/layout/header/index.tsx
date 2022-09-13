import * as s from "./header.styles";

import Logo from "../../../../../public/Logo.svg";

import { useRouter } from "next/router";

export default function LayoutHeader() {
  const router = useRouter();
  const onClickMoveToPage = (pageName: string) => () => {
    location.replace(pageName);
  };
  return (
    <s.Wrapper>
      <s.MenuWrapper>
        <s.Logo>
          <Logo onClick={onClickMoveToPage("/main/")} />
        </s.Logo>
        <s.MenuList>
          <s.Menu onClick={onClickMoveToPage("/board")}>LIST</s.Menu>
          <s.Menu onClick={onClickMoveToPage("/board/new/")}>POST</s.Menu>
          <s.Menu onClick={onClickMoveToPage("/eventInfo/")}>EVENT</s.Menu>
        </s.MenuList>
      </s.MenuWrapper>
    </s.Wrapper>
  );
}
