import styled from "@emotion/styled";
import "animate.css";

export const Wrapper = styled.main`
  width: 95%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EventWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const Box1 = styled.div`
  width: 100%;
  height: 40%;

  margin-top: 5rem;
  display: flex;
  flex-direction: row;
  display: flex;

  @media (max-width: 767px) {
    width: 300px;
    display: flex;
    flex-direction: column;
  }
`;
export const Box2 = styled.div`
  width: 100%;
  height: 40%;

  margin-top: 18rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    width: 300px;
    display: flex;
    flex-direction: column;
  }

  // border: 1px solid red;
`;
export const Box3 = styled.div`
  width: 100%;
  height: 40%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 18rem;
  margin-top: 40rem;
  @media (max-width: 767px) {
    width: 300px;
    display: flex;
    flex-direction: column;
  }
  // border: 1px solid red;
`;
export const Divi = styled.div`
  width: auto;
  height: 640px;
  .isActive {
    animation: fadeInUp;
    animation-duration: 1s;
  }
`;
export const DiviMiddle = styled.div`
  .isActive {
    animation: fadeInRight;
    animation-duration: 2s;
  }
`;
export const DiviBottom = styled.div`
  .isActive {
    animation: fadeInRight;
    animation-duration: 4s;
  }
`;
export const ItemImg = styled.img`
  width: 50rem;
  animation: fadeInUp;
  animation-duration: 1s;
  @media (max-width: 767px) {
    width: 400px;
  }
`;
export const ItemImg2 = styled.img`
  width: 40rem;
  /* animation: fadeInRight;
  animation-duration: 2s; */

  @media (max-width: 767px) {
    width: 400px;

    margin-left: 6rem;
  }
  //border: 1px solid green;
`;
export const ItemImg3 = styled.img`
  width: 40rem;
  /* animation: fadeInLeft;
  animation-duration: 2s; */
  @media (max-width: 767px) {
    width: 400px;
    margin-left: 6rem;
  }
`;

export const TextBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    width: 300px;

    margin-top: -8rem;
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const TextBox2 = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //border: 1px solid pink;

  @media (max-width: 767px) {
    width: 300px;

    margin-top: -2rem;
    margin-left: 2rem;
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const TextLine1 = styled.div`
  margin-top: 8rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 800;
  @media (max-width: 767px) {
    font-size: 2rem;
  }
`;

export const Text1 = styled.div`
  padding-right: 1rem;
  padding-left: 1rem;
  font-weight: 500;
  @media (max-width: 767px) {
    font-size: 1.3rem;
  }
`;
export const Text2 = styled.div`
  color: #3f00fd;
  font-size: 3rem;
  @media (max-width: 767px) {
    font-size: 1.6rem;
  }
`;
export const TextLine2 = styled.div`
  font-size: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) {
    font-size: 1.2rem;
  }
`;
export const EventWrapper2 = styled.div`
  width: 60%;
  height: 30%;
  display: flex;
  flex-direction: row;
`;
