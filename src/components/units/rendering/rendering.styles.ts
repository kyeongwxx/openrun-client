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
  //height: 100rem;
  display: flex;
  flex-direction: column;
  //border: 1px solid red;
`;
export const Box1 = styled.div`
  width: 100%;
  height: 40%;

  margin-top: 5rem;
  display: flex;
  flex-direction: row;
  //border: 1px solid blue;
`;
export const Box2 = styled.div`
  width: 100%;
  height: 40%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  //border: 1px solid green;
`;
export const Box3 = styled.div`
  width: 100%;
  height: 40%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 12rem;
  // border: 1px solid green;
`;
export const ItemImg = styled.img`
  width: 50rem;
  animation: fadeInLeft;
  animation-duration: 2s;
`;
export const ItemImg2 = styled.img`
  width: 50rem;
  animation: fadeInRight;
  animation-duration: 5s;

  // border: 1px solid green;
`;
export const ItemImg3 = styled.img`
  width: 50rem;
  animation: fadeInLeft;
  animation-duration: 8s;
`;

export const TextBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // border: 1px solid red;
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
`;

export const Text1 = styled.div`
  padding-right: 1rem;
  padding-left: 1rem;
`;
export const Text2 = styled.div`
  color: #3f00fd;
  font-size: 3rem;
`;
export const TextLine2 = styled.div`
  font-size: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const EventWrapper2 = styled.div`
  width: 60%;
  height: 30%;
  display: flex;
  flex-direction: row;
`;
