import styled from "@emotion/styled";
import { PersonPinCircleSharp } from "@mui/icons-material";

export const Wrapper = styled.main`
  width: 95%;

  margin: auto;
`;

export const AdCarousel = styled.img`
  width: 100%;
  height: 700px;
  object-fit: contain;
  background-color: ${(props) => props.color};

  @media (max-width: 767px) {
    height: 300px;
  }
`;
