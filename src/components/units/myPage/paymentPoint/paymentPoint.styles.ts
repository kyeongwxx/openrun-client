import styled from "@emotion/styled";
import { Container } from "@mui/system";
import InfiniteScroll from "react-infinite-scroller";

export const Wrapper = styled.main`
  width: 100%;
  margin: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;
export const PointWrapper = styled(Container)`
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;

  @media (max-width: 767px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const PointTitle = styled.div`
  margin-top: 5px;
  font-weight: 700;
  color: #333;
`;

export const PointInfo = styled.div`
  width: 80%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const AvailablePointWrapper = styled.div`
  width: 50%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

export const AvailablePoint = styled.div`
  width: 21%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;

  @media (max-width: 767px) {
    width: 29%;
  }
`;
export const ChargePoint = styled.button`
  width: 171px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #333;
  background-color: transparent;

  cursor: pointer;
  @media (max-width: 767px) {
    width: 100px;
    height: 20px;
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

export const DateText = styled.div`
  font-size: 1rem;
  color: #656565;
  text-align: center;
  @media (max-width: 767px) {
    font-size: 0.5rem;
  }
`;

export const DivideLine = styled.div`
  width: 1px;
  height: 40%;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const DivideLineHorizontal = styled(Container)<{ color: string }>`
  height: 1px;
  background-color: ${(props) => props.color};
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const PointHistoriesWrapper = styled(Container)`
  height: 400px;
  overflow: auto;
  margin: auto;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const PointHistories = styled(InfiniteScroll)`
  width: 100%;

  margin-left: 20%;
  margin-top: 30px;

  @media (max-width: 767px) {
    margin-left: 0%;
  }
`;

export const RefundPoint = styled.button`
  width: 171px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #333;
  background-color: transparent;

  cursor: pointer;
  @media (max-width: 767px) {
    width: 100px;
    height: 20px;
  }
`;
export const None = styled.div`
  width: 171px;
  height: 40px;

  @media (max-width: 767px) {
    width: 100px;
  }
`;

export const PaymentWrapper = styled.section`
  width: 90%;
  height: 400px;
  /* margin-left: 20%; */
  margin: auto;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 767px) {
    height: 250px;
    justify-content: space-around;
  }
`;

export const SelectPoint = styled.div`
  width: 50%;
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SelectedPointWrapper = styled.div`
  width: 300px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
