import styled from "@emotion/styled";

export const Wrapper = styled.main`
  width: 40%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 767px) {
    width: 350px;
  }
`;

export const Title = styled.div`
  font-size: 1.875rem;
  color: #000000;
  padding-top: 4.375rem;
  padding-bottom: 3.125rem;
  font-weight: 700;
`;

export const AgreeWrapper = styled.div`
  width: 100%;

  padding-top: 1.438rem;
  padding-bottom: 0.938rem;
  color: #393939;
  font-weight: 400;
  font-size: 0.813rem;
`;

export const AgreeText = styled.div``;
export const DivideLine = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(101, 101, 101, 0.5);
`;
export const EssentialWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding-top: 1.313rem;
  color: #393939;
  font-weight: 400;
  font-size: 0.813rem;
`;

export const RadioWrapper = styled.div`
  display: flex;
  flex-direction: row;
  line-height: 0.7rem;
`;

export const DetailText = styled.div`
  font-size: 0.5rem;
`;

export const PhoneWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Certify = styled.div`
  width: 100%;
`;

export const Margin = styled.div`
  width: 10px;
  height: 10px;
`;
