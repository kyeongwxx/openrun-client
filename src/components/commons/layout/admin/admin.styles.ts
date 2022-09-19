import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 767px) {
    width: auto;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const InnerWrapper = styled.div`
  width: 100%;

  margin-bottom: 10rem;
  padding-left: 8rem;
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  @media (max-width: 767px) {
    flex-direction: column;
    padding-left: 2.5rem;
  }
`;
export const Box = styled.div`
  width: 62rem;

  margin-bottom: 5rem;

  @media (max-width: 767px) {
    width: 500px;
    height: 500px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  border: 1px solid green;
`;

export const Title = styled.div`
  color: #555;
  font-size: 20px;
  margin-bottom: 3rem;
  @media (max-width: 767px) {
    font-size: 25px;
  }
`;
