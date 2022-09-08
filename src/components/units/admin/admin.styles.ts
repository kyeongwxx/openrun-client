import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
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
export const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 767px) {
    flex-direction: column;
  }

  border: 1px solid red;
`;
export const Box = styled.div`
  width: 500px;
  height: 400px;
  @media (max-width: 767px) {
    width: 500px;
    height: 500px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Title = styled.div`
  color: #555;
  font-size: 20px;
  margin-bottom: 10px;
  @media (max-width: 767px) {
    font-size: 25px;
  }
`;
export const Graph = styled.div`
  width: 450px;
  height: 350px;
  @media (max-width: 767px) {
    width: 400px;
    height: 400px;
  }
  border: 1px solid red;
`;

export const Chart = styled.div`
  width: 450px;
  height: 350px;
  @media (max-width: 767px) {
    width: 400px;
    height: 400px;
  }
  border: 1px solid red;
`;
export const Box2 = styled.div`
  margin-bottom: 20px;

  @media (max-width: 767px) {
    width: 500px;
    height: 400px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const AdminInfo = styled.div`
  width: 1000px;
  height: 600px;
  @media (max-width: 767px) {
    width: 400px;
    height: 400px;
  }

  border: 1px solid red;
`;
export const UserInfo = styled.div`
  width: 1000px;
  height: 600px;
  @media (max-width: 767px) {
    width: 400px;
    height: 400px;
  }
  border: 1px solid red;
`;
export const InnerWrapper2 = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 60px;
  border: 1px solid red;
`;
