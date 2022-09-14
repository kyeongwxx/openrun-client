import styled from "@emotion/styled";
import { PersonPinCircleSharp } from "@mui/icons-material";
import { Container } from "@mui/system";

export const AdCarousel = styled.img`
  height: 700px;
  object-fit: contain;
  background-color: ${(props) => props.color};

  @media (max-width: 767px) {
    height: 300px;
  }
`;
