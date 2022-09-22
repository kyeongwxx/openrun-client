import styled from "@emotion/styled";

export const TabsWrapper = styled.div`
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    width: auto;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const Tabs = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const Tab = styled.div<{ color: string; bg: string; weight: string }>`
  width: 20%;

  text-align: center;
  margin: 0 10px;
  font-size: 0.8rem;
  background: ${(props) => props.bg};
  color: ${(props) => props.color};
  -webkit-background-clip: text;
  font-weight: ${(props) => props.weight};

  @media (max-width: 767px) {
    width: 100%;
    font-size: 0.6rem;
  }
`;

export const Title = styled.div`
  color: #555;
  font-size: 20px;
  margin-bottom: 3rem;
  @media (max-width: 767px) {
    font-size: 25px;
  }
`;
