import * as s from "./header.styles";
import Bag from "../../../../../public/Bag.svg";
import Heart from "../../../../../public/Heart.svg";
import Account from "../../../../../public/Account.svg";
import Logo from "../../../../../public/Logo.svg";
import Hamburger from "../../../../../public/Hamburger.svg";
import Search from "../../../../../public/Search.svg";

export default function LayoutHeader() {
  return (
    <s.Wrapper>
      <s.MenuWrapper>
        {/* <s.Hamburger>
          <Hamburger />
        </s.Hamburger> */}
        <s.Logo>
          <Logo />
        </s.Logo>
        <s.MenuList>
          <s.Menu>LIST</s.Menu>
          <s.Menu>POST</s.Menu>
          <s.Menu>NEWS</s.Menu>

          {/* <s.MenuIcon>
            <Account />
          </s.MenuIcon>
          <s.MenuIcon>
            <Search />
          </s.MenuIcon>
          <s.MenuIcon>
            <Heart />
          </s.MenuIcon>
          <s.MenuIcon>
            <Bag />
          </s.MenuIcon> */}
        </s.MenuList>
      </s.MenuWrapper>
    </s.Wrapper>
  );
}
