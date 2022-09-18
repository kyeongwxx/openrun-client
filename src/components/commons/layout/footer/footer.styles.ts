import styled from "@emotion/styled";
import { Container } from "@mui/system";

export const Wrapper = styled.footer`
  width: 100%;

  margin-top: 20px;

  background-color: #f7f7f7;

  @media (max-width: 767px) {
    height: 150px;
  }
`;

export const MenuWrapper = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 767px) {
    height: 100%;
    align-items: center;
  }
`;

export const Menu = styled.section`
  width: 30%;
  margin-top: 10%;
  margin-bottom: 10%;

  color: #333;

  @media (max-width: 767px) {
    margin: 1%;
    width: 40%;
  }
`;

export const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #909090;

  @media (max-width: 767px) {
    margin: 1%;
  }
`;

export const Text = styled.p<{ weight: string; color: string }>`
  margin-bottom: 3%;
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
  font-size: 1rem;

  @media (max-width: 767px) {
    font-size: 0.5rem;
  }
`;
