import styled from "@emotion/styled";

export const Wrapper = styled.main`
  width: 95%;
  margin: auto;
`;

export const DateCarousel = styled.section`
  width: 90%;
  height: 143px;
  margin: auto;
  margin-top: 3%;
  margin-bottom: 3%;
`;

export const EventProductWrapper = styled.section`
  width: 90%;
  height: 600px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  overflow-y: scroll;
  justify-content: center;
  margin: auto;
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
`;
export const ProductText = styled.div`
  width: 100%;
  height: 25%;
  padding: 5%;
`;

export const H1 = styled.p`
  color: ${(props) => props.color};
  font-weight: 700;
  font-size: 2rem;
  @media (max-width: 767px) {
    font-size: 0.8rem;
  }
`;

export const H3 = styled.h3`
  color: #333;
`;
export const H2 = styled.h2`
  color: #333;
`;

export const H5 = styled.h5`
  color: #333;
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

export const ProductWrapper = styled.section`
  width: 90%;
  height: 690px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 767px) {
    background-size: contain;
    height: 300px;
  }
`;

export const ProductWrapperText = styled.div`
  text-align: center;
`;
export const BannerImg = styled.div<{
  height: string;
  url: string;
}>`
  width: 100%;
  height: ${(props) => props.height};
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
    height: 100px;
    flex-direction: row;
    flex-wrap: wrap;
    overflow-y: scroll;
    justify-content: center;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const BestRunner = styled.div`
  width: 49%;
  height: 45%;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  @media (max-width: 767px) {
    width: 80%;
    height: 50px;
    border-radius: 10px;
    margin-bottom: 10px;
  }
`;

export const BannerDiv = styled.div`
  width: 100%;
  height: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #d2e0ec;
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
`;

export const CategoryImages = styled.div`
  width: 70%;
  height: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  overflow-y: scroll;
  justify-content: center;
  background-color: unset;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const CategoryImage = styled.img`
  width: 400px;
  height: 300px;
  margin: 1%;
  border-radius: 24px;

  background-color: orange;
  @media (max-width: 767px) {
    width: 190px;
    height: 170px;
  }
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
  background-color: orange;
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
  width: 100%;
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
  width: 95%;
  height: 40%;
  border-radius: 24px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: skyblue;
`;
