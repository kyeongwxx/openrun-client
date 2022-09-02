import * as s from "./navigation.styles";
import Bag from "../../../../../public/Bag.svg";
import Heart from "../../../../../public/Heart.svg";
import Account from "../../../../../public/Account.svg";
import Logo from "../../../../../public/Logo.svg";
import Hamburger from "../../../../../public/Hamburger.svg";
import Search from "../../../../../public/Search.svg";
import { Grid } from "@mui/material";
import { height } from "@mui/system";

export default function LayoutNavigation() {
  return (
    <s.Wrapper>
      <s.MenuWrapper>
        <Grid container spacing={2}>
          <Grid item xs={9}></Grid>
          <Grid item xs={3}>
            <s.MenuList>
              <s.Text>고객센터</s.Text>
              <s.Text>관심글</s.Text>
              <s.Text>마이페이지</s.Text>
              <s.Text>회원가입</s.Text>
            </s.MenuList>
          </Grid>
        </Grid>
        {/* <s.Hamburger>
          <Hamburger />
        </s.Hamburger> */}

        {/* <s.MenuList>
          <s.MenuIcon>
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
          </s.MenuIcon>
        </s.MenuList> */}
      </s.MenuWrapper>
    </s.Wrapper>
  );
}
