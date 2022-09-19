import styled from "@emotion/styled";
import { Container } from "@mui/system";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import { BOX_BG_COLOR } from "../../../commons/cssConst";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export const Wrapper = styled.main`
  width: 100%;
`;

export const EventProductWrapper = styled(Container)`
  height: 600px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  overflow-y: scroll;
  justify-content: center;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 767px) {
    margin-top: 10px;
    height: 300px;
  }
`;
export const EventProduct = styled.div`
  width: 300px;
  height: 400px;
  margin: 1%;
  @media (max-width: 767px) {
    width: 200px;
    height: 300px;
  }
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 60%;
  border-radius: 24px;
  background-color: lightgray;
  object-fit: fill;
  cursor: pointer;
`;
export const ProductTexts = styled.div`
  width: 100%;
  height: 40%;
  padding: 5%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  cursor: pointer;
`;

export const ProductText = styled.div<{ weight: string; size: string }>`
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size};
`;

export const H1 = styled.p`
  color: ${(props) => props.color};
  font-weight: 700;
  font-size: 2rem;
  @media (max-width: 767px) {
    font-size: 0.8rem;
  }
`;

export const TEXT = styled.div`
  color: ${(props) => props.color};
  font-weight: 400;
  font-size: 1rem;

  @media (max-width: 767px) {
    width: 100%;
    font-size: 0.5rem;
  }
`;

export const BannerText = styled.div`
  width: 60%;
  color: #4e6781;
  font-size: 1rem;

  text-align: center;
  @media (max-width: 767px) {
    font-size: 0.4rem;
  }
`;

export const ProductWrapper = styled(Container)`
  height: 690px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 767px) {
    background-size: contain;
    height: 300px;
  }
`;

export const ProductWrapperText = styled(Container)`
  text-align: center;
`;
export const BannerImg = styled(Container)<{
  height: string;
  url: string;
}>`
  height: ${(props) => props.height};
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: aliceblue;

  @media (max-width: 767px) {
    background-size: contain;
    height: 300px;
  }
`;
export const BestRunners = styled.div`
  width: 90%;
  height: 40%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 767px) {
    height: 200px;
    flex-direction: row;
    flex-wrap: wrap;
    overflow-y: scroll;
    justify-content: center;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const RunnerInfo = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 12px;

  height: 100px;
  align-items: center;
  width: 75%;

  justify-content: space-around;
  /* background-color: yellow; */

  @media (max-width: 767px) {
    height: 75%;
    width: 75%;
  }
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;

  width: 150px;
`;

export const Ranking = styled.div`
  margin-left: 10px;
  width: 30px;
  height: 30px;

  background-size: contain;
  background-image: url("/img/ranking.png");
  background-repeat: no-repeat;
`;
export const RankingText = styled.div`
  padding-left: 7px;
  color: #fff;
  font-weight: 700;
`;

export const RunnerText = styled.div<{
  weight: string;
  size: string;
  color: string;
}>`
  font-weight: ${(prev) => prev.weight};
  font-size: ${(prev) => prev.size};
  color: ${(prev) => prev.color};
`;

export const RunnerImg = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  border-radius: 50%;

  @media (max-width: 767px) {
    width: 50px;
    height: 50px;
  }
`;

export const BestRunner = styled.div`
  width: 49%;
  height: 45%;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: #fff;

  @media (max-width: 767px) {
    width: 80%;
    height: 100px;
    border-radius: 10px;
    margin-bottom: 10px;
  }
`;

export const BannerDiv = styled(Container)`
  height: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #d2e0ec;
  margin: auto;
  margin-bottom: 100px;

  @media (max-width: 767px) {
    height: 100px;
    margin-bottom: 30px;
  }
`;

export const BestProductCategory = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: row;
`;

export const Category = styled.div`
  width: 30%;
  height: 50%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: 700;
  cursor: pointer;
`;

export const CategoryImages = styled.div`
  width: 70%;
  height: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  overflow-y: scroll;
  justify-content: flex-end;

  ::-webkit-scrollbar {
    display: none;
  }
`;
export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const CategoryImage = styled.div<{ image: string }>`
  width: 200px;
  height: 300px;
  margin: 1%;
  border-radius: 24px;

  background-color: #fff;
  background-image: url(${(props) => props.image});
  position: relative;
  background-repeat: no-repeat;

  @media (max-width: 767px) {
    width: 190px;
    height: 170px;
  }
`;
export const CategoryInfo = styled.div`
  width: 100%;
  height: 80px;
  background-color: #f5f5f5;
  opacity: 0.8;
  position: absolute;
  border-radius: 10px;
  margin-top: 50%;
  z-index: 30;
  padding-top: 10px;
  cursor: pointer;
`;

export const CategoryText = styled.div<{ weight: string; size: string }>`
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size};
  margin-left: 10px;
`;

export const NewProductCategory = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: row;
`;

export const NewItemsImages = styled.div`
  width: 100%;
  height: 80%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
export const NewItemsImage = styled.img`
  width: 33%;
  margin: 1%;
  border-radius: 24px;

  @media (max-width: 767px) {
    width: 100%;
    height: 300px;
  }
`;

export const BannerWrapperText = styled.div`
  width: 30%;
  margin: auto;
  text-align: center;
`;

export const NewsCategory = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const NewsImages = styled.div<{ justify: string }>`
  width: 50%;
  height: 100%;
  margin: 1%;
  display: flex;
  flex-direction: column;

  justify-content: ${(props) => props.justify};
  align-items: center;
`;

export const NewsImage = styled.div`
  width: 100%;
  height: 40%;
  border-radius: 24px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: skyblue;
`;

export const Runner = styled(DirectionsRunIcon)`
  font-size: 0.9rem;
`;
export const NoData = styled.div`
  width: 100%;
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
