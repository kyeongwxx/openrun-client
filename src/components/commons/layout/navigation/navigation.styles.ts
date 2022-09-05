import styled from "@emotion/styled";
import { Grid } from "@mui/material";

export const Wrapper = styled.header`
  width: 95%;
  height: 40px;
  margin: auto;
  border-bottom: 1px solid rgba(101, 101, 101, 0.5);
  @media (max-width: 767px) {
    display: none;
  }
`;

export const MenuWrapper = styled.div`
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const MenuList = styled.div`
  width: 33%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const Menu = styled.div`
  margin-left: 3%;
  color: #5e5e5e;
  font-size: 0.8rem;
  cursor: pointer;
`;
