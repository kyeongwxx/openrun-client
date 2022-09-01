import styled from "@emotion/styled";

export const Wrapper = styled.header`
  width: 95%;
  height: 96px;
  margin: auto;
  background-color: yellow;
`;

export const MenuWrapper = styled.div`
  width: 100%;
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
  /* width: 33.3%; */
  /* background-color: pink; */
  text-align: center;
  cursor: pointer;
`;

export const MenuList = styled.div`
  /* width: 33.3%; */
  background-color: aqua;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const MenuIcon = styled.div`
  /* background-color: pink; */
  margin-right: 10%;
  cursor: pointer;
`;
