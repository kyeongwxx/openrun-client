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

export const Button = styled.div`
  width: 60px;
  height: 60px;
  background-color: #fff;
  position: fixed;
  border-radius: 24px;
  z-index: 90;
  bottom: 100px;
  right: 25px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  line-height: 60px;
  font-weight: 700;
  color: #333;
  cursor: pointer;
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
  height: 40%;
  background-color: rgba(0, 0, 0, 0.2);
`;
export const DivideLineHorizontal = styled.div<{ color: string }>`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.color};
`;

export const FavoriteListWrapper = styled(Container)`
  height: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin: auto;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const FavoriteTitle = styled.div`
  cursor: pointer;
  margin-top: 5px;
  font-weight: 700;
  color: #333;
`;

export const NodataImg = styled.img`
  width: 80%;
  height: 100%;
  object-fit: contain;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const InfiniteScrollLimit = styled.div`
  overflow: auto;
  width: 80%;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const FavoriteBoards = styled(InfiniteScroll)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

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
  justify-content: space-evenly;
  align-items: center;
  background-color: rgb(244, 244, 244);
  cursor: pointer;
`;
export const Status = styled.div<{ color: string; border: string }>`
  width: 80px;

  text-align: center;
  border: 1px solid ${(props) => props.border};
  color: ${(props) => props.color};
  font-weight: 700;

  @media (max-width: 767px) {
    width: 20%;
    font-size: 4px;
    margin: 0 10px;
  }
`;
export const BoardImg = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 20px;
  object-fit: contain;
`;

export const BoardContentsWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const BoardContents = styled.div`
  width: 80%;
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 767px) {
    width: 70%;

    flex-direction: column;
    justify-content: center;
  }
`;

export const BoardContent = styled.div<{
  weight: string;
  size: string;
  color: string;
  align: string;
  width: string;
}>`
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size};
  width: ${(props) => props.width};
  text-align: ${(props) => props.align};

  @media (max-width: 767px) {
    font-size: 0.5rem;
    width: 100%;
    margin-bottom: 2px;
    margin-left: 10px;
    text-align: left;
    /* height: 100px; */
  }
`;
