import styled from "@emotion/styled";
import { Grid } from "@mui/material";

export const Wrapper = styled.header`
  width: 95%;
  height: 40px;
  margin: auto;

  border-bottom: 1px solid rgba(101, 101, 101, 0.5);
`;

export const MenuWrapper = styled.div`
  height: 100%;

  display: flex;
  flex-direction: row;
`;

export const MenuList = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MenuIcon = styled.div`
  background-color: pink;
  margin-right: 10%;
  cursor: pointer;
`;

export const Text = styled.div`
  color: #5e5e5e;
  font-size: 0.5rem;
  cursor: pointer;
`;
