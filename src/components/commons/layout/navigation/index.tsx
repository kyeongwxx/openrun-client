import * as s from "./navigation.styles";

import { Grid } from "@mui/material";
import MediaQueryPc from "../../../../commons/mediaQuery/mediaQueryStandardPc";
import MediaQueryTablet from "../../../../commons/mediaQuery/mediaQueryStandardTablet";
import MediaQueryMobile from "../../../../commons/mediaQuery/mediaQueryStandardMobile";

export default function LayoutNavigation() {
  const isPc = MediaQueryPc();
  const isTablet = MediaQueryTablet();
  const isMobile = MediaQueryMobile();
  return (
    <>
      {(isPc || isTablet) && (
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
          </s.MenuWrapper>
        </s.Wrapper>
      )}
    </>
  );
}
