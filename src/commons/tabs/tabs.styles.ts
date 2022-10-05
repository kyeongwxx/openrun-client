import styled from "@emotion/styled";
import { Container, Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";

export const Wrapper = styled(Container)``;

export const BoxCustom = styled(Box)`
  @media (max-width: 767px) {
    width: 110%;
  }
`;

export const TabsCustom = styled(Tabs)`
  margin: auto;
`;

export const TabCustom = styled(Tab)`
  @media (max-width: 767px) {
    font-size: 6px;
    width: 40px;
    margin: 1px;
  }
`;
