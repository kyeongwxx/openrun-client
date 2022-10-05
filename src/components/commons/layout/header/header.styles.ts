import styled from "@emotion/styled";
import { Container } from "@mui/system";

export const Wrapper = styled.header`
  width: 100%;
  height: 96px;
  margin: auto;
`;

export const MenuWrapper = styled(Container)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ForMobileWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Logo = styled.div`
  text-align: center;
  cursor: pointer;
`;

export const MenuList = styled.div`
  width: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 767px) {
    width: 20%;
  }
`;

export const MenuIcon = styled.div`
  margin-right: 10%;
  cursor: pointer;
`;
export const Menu = styled.div`
  font-weight: 700;
  color: #333;

  cursor: pointer;
`;
