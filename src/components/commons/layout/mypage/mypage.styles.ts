import styled from "@emotion/styled";
import { Container } from "@mui/system";

export const Wrapper = styled.main`
  width: 100%;
  margin: auto;
`;

export const ProfileWrapper = styled(Container)`
  height: 156px;
  background-color: #f2f2f2;

  margin: auto;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 767px) {
    height: 100px;
    display: flex;
    flex-direction: column;
  }
`;
export const ProfileUser = styled.div`
  width: 45%;
  height: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px) {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
`;

export const ProfileImg = styled.img`
  background-color: #fff;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: contain;

  @media (max-width: 767px) {
    width: 35px;
    height: 35px;
  }
`;

export const ProfileDetail = styled.div<{ width: string }>`
  width: ${(props) => props.width};
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin: 10px;

  @media (max-width: 767px) {
    width: ${(props) => props.width};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Text = styled.div<{ size: string; color: string; weight: string }>`
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};

  @media (max-width: 767px) {
    font-size: 0.5rem;
  }
`;
export const UserInfoEdit = styled.button`
  width: 86px;
  height: 22px;
  border-radius: 24px;
  border: 1px solid #333;
  background-color: transparent;
  text-align: center;
  font-size: 0.7rem;
  color: #333;
  cursor: pointer;
  @media (max-width: 767px) {
    width: 65px;
    font-size: 0.3rem;
  }
`;

export const UserDetail = styled.div`
  width: 45%;
  height: 60%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 767px) {
    width: 100%;
    font-size: 0.3rem;
    justify-content: center;
  }
`;

export const userInfoNumbers = styled.div`
  width: 20%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DivideLine = styled.div`
  width: 1px;
  height: 40%;
  background-color: rgba(0, 0, 0, 0.2);
`;
export const DivideLineHorizontal = styled(Container)<{ color: string }>`
  height: 1px;
  margin-bottom: 100px;

  background-color: ${(props) => props.color};
  @media (max-width: 767px) {
    margin-bottom: 40px;
  }
`;

export const MenuWrapper = styled(Container)`
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Menus = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 15px;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const Menu = styled.div`
  cursor: pointer;
`;
