import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroller";

export const Wrapper = styled.main`
  width: 95%;
  margin: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const SelectorWrapper = styled.div`
  width: 200px;
  margin-bottom: 40px;
  float: right;
  @media (max-width: 767px) {
    width: 30%;
  }
`;

export const Text = styled.div<{ size: string; color: string; weight: string }>`
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};

  @media (max-width: 767px) {
    font-size: 0.3rem;
  }
`;

export const DivideLine = styled.div`
  width: 1px;
  height: 60%;
  background-color: rgba(0, 0, 0, 0.2);
`;
export const DivideLineHorizontal = styled.div<{ color: string }>`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.color};
`;

export const FavoriteListWrapper = styled.section`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 767px) {
    flex-direction: column;
    /* justify-content: space-between; */
  }
`;

export const FavoriteTitle = styled.div`
  cursor: pointer;
  margin-top: 5px;
  font-weight: 700;
  color: #333;
`;

export const FavoriteBoards = styled(InfiniteScroll)`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 767px) {
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const NoDataImg = styled.img`
  width: 80%;
  height: 100%;
  object-fit: contain;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const FavoriteBoard = styled.div`
  width: 100%;
  height: 100px;
  margin: 1%;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(244, 244, 244);
  @media (max-width: 767px) {
    width: 48%;
    height: 180px;
    display: flex;
    flex-direction: column;
  }
`;

export const BoardInfoWrapper = styled.div<{ width: string }>`
  width: ${(props) => props.width};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const BoardImg = styled.img`
  width: 90px;
  height: 90px;
  margin-left: 5px;

  border-radius: 20px;
  background-color: aqua;
  @media (max-width: 767px) {
    width: 50px;
    height: 50px;
    border-radius: 10px;
  }
`;

export const BoardContents = styled.div`
  width: 70%;
  height: 90px;

  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (max-width: 767px) {
    width: 60%;

    font-size: 0.5rem;
  }
`;

export const BoardContent = styled.div<{
  weight: string;
  size: string;
  color: string;
}>`
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size};

  @media (max-width: 767px) {
    font-size: 0.4rem;
  }
`;

export const BtnWrapper = styled.div`
  width: 200px;
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 767px) {
    width: 50%;
    height: 30px;
  }
`;

export const Button = styled.div`
  width: 35%;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (max-width: 767px) {
    width: 50%;
    height: 100%;
  }
`;
