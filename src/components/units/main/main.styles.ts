import styled from "@emotion/styled";

export const Wrapper = styled.main`
  width: 95%;

  margin: auto;
  background-color: pink;
`;

export const AdCarousel = styled.section`
  width: 100%;
  height: 700px;
  background-color: aqua;
`;

export const DateCarousel = styled.section`
  width: 90%;
  height: 143px;
  margin: auto;
  margin-top: 3%;
  margin-bottom: 3%;
  background-color: salmon;
`;

export const EventProductWrapper = styled.section`
  width: 90%;
  height: 600px;

  display: flex;
  flex-direction: row;
  margin: auto;
`;
export const EventProduct = styled.div`
  width: 20%;
  margin: 1%;
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 60%;
  border-radius: 24px;
  background-color: lightgray;
`;
export const ProductText = styled.div`
  width: 100%;
  height: 25%;
  padding: 5%;
`;

export const H1 = styled.h1`
  color: #333;
  margin-bottom: 3%;
`;

export const H3 = styled.h3`
  color: #333;
  margin-bottom: 3%;
`;
export const H2 = styled.h2`
  color: #333;
  margin-bottom: 3%;
`;

export const H5 = styled.h5`
  color: #333;
  margin-bottom: 5%;
`;

export const TEXT = styled.span`
  color: #333;
  margin-bottom: 5%;
`;

export const BestProductWrapper = styled.section`
  width: 100%;
  height: 690px;
  background-color: beige;

  margin: auto;
  display: flex;
  flex-direction: column;
`;

export const BestProductText = styled.div`
  width: 15%;
  height: 30%;

  margin: auto;
  text-align: center;

  background-color: aliceblue;
`;

export const BestProductCategory = styled.div`
  width: 100%;
  height: 70%;

  background-color: yellow;
  display: flex;
  flex-direction: row;
`;

export const Category = styled.div`
  width: 30%;
  height: 50%;

  margin: auto;
  text-align: center;

  background-color: skyblue;
`;

export const CategoryImages = styled.div`
  width: 70%;
  height: 80%;

  margin: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  overflow-y: scroll;

  background-color: yellowgreen;
`;

export const CategoryImage = styled.div`
  width: 50%;
  height: 90%;
  margin: 1%;
  border-radius: 24px;

  background-color: orange;
`;
