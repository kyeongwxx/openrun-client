import styled from "@emotion/styled";

export const Wrapper = styled.main`
  width: 95%;
  margin: auto;
`;

export const Carousel = styled.section`
  width: 100%;
  height: 143px;
  margin: auto;
  margin-top: 3%;
  margin-bottom: 3%;
`;

export const ButtonWrapper = styled.div`
  width: 90%;
  height: 143px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.div`
  width: 90px;
  height: 143px;
  margin: auto;
  border: 1px solid #333;
  border-radius: 45px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
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

export const TextDay = styled.div`
  color: #333;
  font-weight: 400;
  font-size: 1rem;
  @media (max-width: 767px) {
    font-size: 1rem;
  }
`;

export const TextDate = styled.div`
  color: #333;
  font-weight: 700;
  font-size: 2rem;
  @media (max-width: 767px) {
    font-size: 1rem;
  }
`;
