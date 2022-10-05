import styled from "@emotion/styled";
import { CheckCircleOutline, ReportGmailerrorred } from "@mui/icons-material";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import { Container } from "@mui/system";
import InfiniteScroll from "react-infinite-scroller";
import { BOX_BG_COLOR } from "../../../../commons/cssConst";
import WallpaperIcon from "@mui/icons-material/Wallpaper";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

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

export const SelectorWrapper = styled.div`
  width: 200px;
  margin-bottom: 40px;
  float: right;

  @media (max-width: 767px) {
    width: 30%;
    margin-bottom: 20px;
  }
`;

export const Text = styled.div<{ color: string; weight: string }>`
  font-size: 0.7rem;
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};

  width: 100%;
  text-align: center;

  @media (max-width: 767px) {
    width: 110%;
    font-size: 4px;
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

export const ActiveListWrapper = styled(Container)`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const ActiveTitle = styled.div`
  cursor: pointer;
  margin-top: 5px;
  font-weight: 700;
  color: #333;
`;

export const InfiniteScrollLimit = styled.div`
  overflow: auto;
  width: 80%;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const NodataImg = styled.img`
  width: 80%;
  height: 100%;

  object-fit: contain;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const NoData = styled.div`
  width: 80%;
  height: 400px;
  background-color: ${BOX_BG_COLOR};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const ExclamationMark = styled(ErrorOutlineIcon)`
  color: #333;
`;

export const NodataText = styled.div`
  color: #333;
`;

export const ActiveBoards = styled(InfiniteScroll)`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const ActiveBoard = styled.div`
  width: 100%;

  margin: 10px;

  border-radius: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${BOX_BG_COLOR};

  @media (max-width: 767px) {
    height: 100px;
    justify-content: space-between;
  }
`;

export const BoardImg = styled.img`
  width: 90px;
  height: 90px;
  margin-left: 5px;
  border-radius: 16px;
  object-fit: cover;
  cursor: pointer;
  @media (max-width: 767px) {
    width: 70px;
    height: 70px;
    border-radius: 10px;
  }
`;

export const BoardContents = styled.div`
  width: 40%;
  height: 90px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
    height: 70px;
    justify-content: space-evenly;
  }
`;
export const Status = styled.div<{ color: string; border: string }>`
  width: 80px;

  text-align: center;
  border: 1px solid ${(props) => props.border};
  color: ${(props) => props.color};
  font-weight: 700;
  font-size: 0.8rem;

  @media (max-width: 767px) {
    width: 30%;
    font-size: 4px;
    margin-left: 10px;
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
  width: 30%;

  cursor: pointer;

  @media (max-width: 767px) {
    font-size: 0.5rem;
    width: 90%;
  }
`;

export const BtnWrapper = styled.div`
  width: 20%;
  height: 90px;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 767px) {
    width: 50%;
    height: 50px;
    /* flex-direction: column; */
  }
`;

export const ButtonC = styled.div`
  width: 35%;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Exclamation = styled(ReportGmailerrorred)`
  color: #d44d4d;
  @media (max-width: 767px) {
    font-size: 0.8rem;
  }
`;

export const Check = styled(CheckCircleOutline)`
  color: #1f8716;
  @media (max-width: 767px) {
    font-size: 0.8rem;
  }
`;

export const Runner = styled(DirectionsRunIcon)`
  color: #333;
`;

export const NoImg = styled(WallpaperIcon)`
  color: #8b8c89;
  width: 10%;
  height: 40%;
  /* background-color: yellow; */
  @media (max-width: 767px) {
    font-size: 0.8rem;
    width: 20%;
    height: 100%;
  }
`;
