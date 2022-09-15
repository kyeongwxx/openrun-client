import styled from "@emotion/styled";
import "animate.css";

export const Main = styled.main`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  ::-webkit-scrollbar {
    width: 0;
    background-color: transparent;
  }

  & > div {
    scroll-snap-align: start;
    height: 100vh;
  }
`;
export const Wrapper = styled.main`
  width: 100%;

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

export const EventWrapper = styled.div`
  /* width: 100%; */
  height: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Box = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 767px) {
    width: 1000px;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media (max-height: 737px) {
    height: 67rem;
    margin-top: -8rem;
  }
`;
export const Box2 = styled.div`
  width: 100%;
  height: 60rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding-bottom: 10rem;
  background-color: #eef9ff;

  @media (max-width: 767px) {
    height: 55rem;
    padding-top: 3rem;
  }
`;
export const Box3 = styled.div`
  width: 100%;
  height: 40%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20rem;
  margin-top: 5rem;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    padding-bottom: -10rem;
  }
`;
export const Box4 = styled.div`
  width: 100%;
  height: 60rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  //padding-bottom: 10rem;
  background-color: #eef9ff;

  @media (max-width: 767px) {
    height: 100rem;
    padding-top: 3rem;
  }
`;
export const MoveToBtn = styled.button`
  width: 15rem;
  height: 10rem;
  border-radius: 14px;

  margin-bottom: 3rem;
  margin-top: -2.5rem;
  background: linear-gradient(93.72deg, #5920d3 0%, #2f88e5 99.32%);

  color: #fff;
  font-weight: 700;
  font-size: 1.1rem;
  border: none;
  cursor: pointer;

  @media (max-width: 767px) {
    width: 10rem;
    height: 9rem;
    margin-top: -5rem;
  }
  @media (max-height: 737px) {
    margin-top: -8rem;
  }
`;
export const ImgInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-right: 10rem;
  margin-top: -5rem;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 3rem;
    margin-left: 3rem;
  }
`;

export const Box3Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ImgDiv = styled.div`
  width: auto;

  display: flex;
  flex-direction: row;
  justify-content: center;

  margin-bottom: -5rem;
  .isActive {
    animation: fadeInUp;
    animation-duration: 2s;
  }
`;
export const ImgDiv2 = styled.div`
  .isActive {
    animation: fadeInLeft;
    animation-duration: 2s;
  }
`;
export const ImgDiv3 = styled.div`
  padding-top: 2rem;
  .isActive {
    animation: fadeInLeft;
    animation-duration: 4s;
  }
`;
export const ImgDiv4 = styled.div`
  padding-top: 2rem;
  .isActive {
    animation: fadeInRight;
    animation-duration: 4s;
  }
`;
export const ImgDiv5 = styled.div`
  width: 100%;
  padding-bottom: 14rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .isActive {
    animation: fadeInUp;
    animation-duration: 5s;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    margin-right: 5.5rem;
  }
`;
export const ItemImg = styled.img`
  width: 45rem;
  margin-bottom: 14rem;
  .isActive {
    animation: fadeInUp;
    animation-duration: 1s;
  }
  @media (max-width: 767px) {
    width: 35rem;
  }
`;
export const ItemImg2 = styled.img`
  width: 52rem;
  margin-top: 3rem;
  border-radius: 15px;

  .isActive {
    animation: fadeInLeft;
    animation-duration: 2s;
  }
  @media (max-width: 767px) {
    width: 35rem;
    margin-left: 6rem;
  }
`;
export const ItemImg3 = styled.img`
  width: 50rem;

  @media (max-width: 767px) {
    width: 30rem;
    margin-left: 6rem;
  }
`;
export const ItemImg4 = styled.img`
  width: 20rem;

  @media (max-width: 767px) {
    width: 400px;
    margin-left: 6rem;
  }
`;
export const ItemImg5 = styled.img`
  width: 25rem;
  margin: 1rem 1rem 0rem 0rem;

  @media (max-width: 767px) {
    width: 400px;
    margin-left: 6rem;
  }
`;
export const ItemImg6 = styled.img`
  width: 25rem;
  margin: 1rem 1rem 0rem 0rem;
  @media (max-width: 767px) {
    width: 400px;
    margin-left: 6rem;
  }
`;
export const ItemImg7 = styled.img`
  width: 25rem;
  margin: 1rem 1rem 0rem 0rem;
  @media (max-width: 767px) {
    width: 400px;
    margin-left: 6rem;
  }
`;
export const ImgWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 6rem;
  }
`;
export const TextBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 3rem;
  margin-bottom: 1rem;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  margin-left: 6rem;
  @media (max-width: 767px) {
  }
`;
export const TextComponent = styled.div`
  font-size: 1.25rem;
  font-weight: 600;

  padding-top: 3rem;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: row;
  @media (max-width: 767px) {
    font-size: 1rem;
    padding-top: 2rem;
    margin-bottom: 2rem;
  }
`;
export const GrayLine = styled.div`
  width: 380px;
  height: 1px;
  box-sizing: border-box;
  border: 1px solid #bfbfbf;
`;

export const TextMid = styled.div`
  font-weight: 700;
  font-size: 1.7rem;
  margin-bottom: 1rem;
  @media (max-width: 767px) {
    font-size: 1.3rem;
  }
`;
export const TextBig = styled.div`
  font-size: 2.2rem;
  font-weight: 700;

  @media (max-width: 767px) {
    font-size: 1.6rem;
  }
`;

export const TextSmall = styled.div`
  color: #555;
  font-weight: 400;
  font-size: 1rem;
  width: 1000px;
  text-align: center;
  margin-top: 20px;
`;

export const BottomWrapper = styled.div`
  width: 100%;
  height: 52rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BottomMentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  font-weight: 800;
  margin-bottom: 4rem;
`;
export const Gradation = styled.div`
  font-size: 3.5rem;
  color: transparent;
  background: linear-gradient(93.72deg, #5920d3 0%, #2f88e5 99.32%);
  -webkit-background-clip: text;

  @media (max-width: 767px) {
    font-size: 2.5rem;
  }
`;
export const BottomMent = styled.div`
  font-size: 3.5rem;
  @media (max-width: 767px) {
    font-size: 2.5rem;
  }
`;
export const HomeBtn = styled.div`
  width: 15rem;
  height: 4rem;
  border-radius: 15px;
  border: none;
  background: linear-gradient(93.72deg, #5920d3 0%, #2f88e5 99.32%);
  color: #fff;
  font-weight: 800;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px) {
    font-size: 1rem;
  }
  cursor: pointer;
`;
