import styled from "@emotion/styled";

export const Wrapper = styled.main`
  width: 95%;
  margin: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const MainWrapper = styled.section`
  width: 90%;
  margin: auto;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ProfileImg = styled.img`
  width: 334px;
  height: 334px;
  border-radius: 50%;

  background-color: yellow;
  @media (max-width: 767px) {
    width: 200px;
    height: 200px;
  }
`;

export const ProfileInfo = styled.div`
  width: 70%;

  display: flex;
  flex-direction: column;

  @media (max-width: 767px) {
    width: 100%;
    margin-top: 20px;
  }
`;

export const ProfileInfoDetail = styled.div`
  width: 100%;

  margin-bottom: 50px;

  @media (max-width: 767px) {
  }
`;

export const Title = styled.div`
  /* margin-bottom: 5px; */
  font-weight: 700;
  color: #333;
`;

export const ButtonWrapper = styled.div`
  width: 50%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 50px;

  @media (max-width: 767px) {
    width: 10 0%;
  }
`;
