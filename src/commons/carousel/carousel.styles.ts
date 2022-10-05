import { gql } from "@apollo/client";
import styled from "@emotion/styled";
import { PersonPinCircleSharp } from "@mui/icons-material";
import { Container } from "@mui/system";

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  background-color: yellow;
`;

export const AdCarousel = styled.img`
  height: 700px;
  object-fit: contain;
  background-color: ${(props) => props.color};
  cursor: pointer;

  @media (max-width: 767px) {
    height: 300px;
  }
`;

export const GoHome = styled.div`
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  background-color: #bbd0ff;
  color: #fff;
  font-weight: 800;
  border-radius: 50%;
  font-size: 10px;
  cursor: pointer;
  z-index: 200;
`;
