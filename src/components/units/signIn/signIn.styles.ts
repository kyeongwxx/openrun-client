import styled from "@emotion/styled";

export const Wrapper = styled.main`
  width: 95%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginWrapper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const Title = styled.div`
  font-size: 1.875rem;
  font-weight: 700;
  padding-top: 4.375rem;
  color: #000000;
  padding-bottom: 3.125rem;
`;
export const InfoInput = styled.input`
  width: 25%;
  height: 77px;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 24px;
  padding-left: 1.625rem;
  background: #f7f7f7;
  border: none;
  margin-bottom: 1rem;
  color: #000000;
`;
export const IdSaveWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 1.813rem;
`;
export const IdSaveBtn = styled.button`
  width: 18px;
  height: 18px;
  border-radius: 9px;
  border: 1px solid #393939;
  background: white;
  margin-right: 0.5rem;
`;
export const IdSaveText = styled.div`
  font-size: 0.8rem;
  font-weight: 400;
  color: #393939;
`;
export const LoginBtn = styled.button`
  width: 25%;
  height: 77px;
  font-size: 1.25rem;
  font-weight: 700;
  border-radius: 24px;
  background: #000000;
  border: none;
  margin-bottom: 1.75rem;
  color: #ffffff;
`;
export const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-bottom: 1.875rem;
  margin-top: 20px;

  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const Text = styled.div`
  font-size: 0.8rem;
  font-weight: 400;
  color: #393939;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  cursor: pointer;
  @media (max-width: 767px) {
    font-size: 0.8rem;
  }
`;
export const DivideLine = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(101, 101, 101, 0.5);
  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const SocialTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 400;
  padding-top: 2.313rem;
  color: #000000;
  padding-bottom: 1.5rem;
`;
export const SocialBtns = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-bottom: 5.25rem;

  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const NaverLogin = styled.div`
  width: 64px;
  height: 64px;
  border: 1px solid #4b9f2d;
  border-radius: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const GoogleLogin = styled.div`
  width: 64px;
  height: 64px;
  border: 1px solid #ea4335;
  border-radius: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const KakaoLogin = styled.div`
  width: 64px;
  height: 64px;
  border: 1px solid #fee500;
  border-radius: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
