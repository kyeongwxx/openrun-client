import styled from "@emotion/styled";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Container } from "@mui/system";
import { BG_GRADATION, BOX_BG_COLOR, BOX_SHADOW_TOP } from "../cssConst";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: row;

  align-items: center;
`;

export const Carousel = styled(Container)`
  width: 100%;
  height: 143px;

  margin-top: 3%;
  margin-bottom: 3%;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  height: 143px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ArrowLeft = styled(ArrowLeftIcon)`
  font-size: 40px;

  cursor: pointer;
`;

export const ArrowRight = styled(ArrowRightIcon)`
  font-size: 40px;
  cursor: pointer;
`;

export const Button = styled.div<{
  shadow: string;
  border: string;
  color: string;
}>`
  width: 90px;
  height: 143px;
  /* margin: auto; */

  border: ${(props) => props.border} solid;
  border-radius: 45px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  box-shadow: ${(props) => props.shadow};
  border-color: ${(props) => props.color};
`;
export const NoneArrowBtn = styled.div`
  width: 40px;
`;

export const ButtonMobile = styled.div`
  width: 80%;
  height: 60px;
  margin: auto;
  margin-top: 40px;
  border: 1px solid #333;
  border-radius: 45px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
`;

export const TextDay = styled.div<{ color: string; bg: string }>`
  background: ${(props) => props.bg};
  color: ${(props) => props.color};
  -webkit-background-clip: text;
  font-weight: 400;
  font-size: 1rem;
  @media (max-width: 767px) {
    font-size: 1rem;
  }
`;

export const TextDate = styled.div<{ color: string; bg: string }>`
  background: ${(props) => props.bg};
  color: ${(props) => props.color};
  -webkit-background-clip: text;
  font-weight: 700;
  font-size: 2rem;
  @media (max-width: 767px) {
    font-size: 1rem;
  }
`;
