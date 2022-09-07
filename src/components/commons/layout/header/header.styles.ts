import styled from "@emotion/styled";
import { Container } from "@mui/system";

export const Wrapper = styled.header`
  width: 100%;
  height: 96px;
  margin: auto;
  /* background-color: yellow; */
`;

export const MenuWrapper = styled(Container)`
  /* width: 100%; */
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Hamburger = styled.div`
  /* width: 33.3%; */
  /* background-color: yellowgreen; */
  cursor: pointer;
`;

export const Logo = styled.div`
  text-align: center;
  cursor: pointer;
`;

export const MenuList = styled.div`
  width: 20%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const MenuIcon = styled.div`
  margin-right: 10%;
  cursor: pointer;
`;
export const Menu = styled.div`
  /* margin-right: 10%; */
  color: #333;

  cursor: pointer;
`;
