import styled from "@emotion/styled";

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

export const ItemWrapper = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: row;
  padding-top: 1.5rem;
  padding-bottom: 2rem;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 767px) {
    width: 100%;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 412px) {
    width: 100%;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const ItemImg = styled.img`
  width: 25rem;

  border-radius: 24px;
  @media (max-width: 767px) {
    width: 310px;
  }
  @media (max-width: 412px) {
    width: 22rem;
  }
`;
export const ItemInfoBox = styled.div`
  padding-top: 1rem;
  margin-left: 4rem;
  width: 100%;
  margin-bottom: 1rem;
  @media (max-width: 767px) {
    width: 280px;
    padding-top: 3rem;
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  @media (max-width: 412px) {
    padding-top: 3rem;
    margin-left: 1.5rem;
    width: 21rem;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
export const PlanTitle = styled.div`
  font-size: 1.15rem;
  font-weight: 800;
  padding-bottom: 1rem;
  color: #9b9b9b;

  @media (max-width: 767px) {
    font-size: 1.3rem;
    font-weight: 800;
  }
  @media (max-width: 412px) {
    font-size: 1.4rem;
    font-weight: 800;
  }
`;
export const Brand = styled.div`
  font-size: 1.3em;
  font-weight: 700;
  padding-bottom: 0.5rem;

  @media (max-width: 767px) {
    font-size: 1.5rem;
    font-weight: 700;
  }
  @media (max-width: 412px) {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;
export const ItemEventImg = styled.div``;
export const Event = styled.div`
  font-size: 1.3rem;
  font-weight: 650;
  padding-bottom: 1rem;

  @media (max-width: 767px) {
    font-size: 1.4rem;
  }
  @media (max-width: 412px) {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;
export const Time = styled.div`
  font-size: 1.3rem;
  font-weight: 350;
  padding-bottom: 1.9rem;
  color: #555;

  @media (max-width: 767px) {
    font-size: 1.4rem;
  }
  @media (max-width: 412px) {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;
export const PlaceTitle = styled.div`
  font-size: 1.15rem;
  font-weight: 800;
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: #9b9b9b;

  @media (max-width: 767px) {
    font-size: 1.3rem;
    font-weight: 800;
  }
  @media (max-width: 412px) {
    font-size: 1.4rem;
    font-weight: 800;
  }
`;

// export const Store = styled.div`
//   font-size: 1.05rem;
//   font-weight: 600;
//   padding-bottom: 0.2rem;
//   text-decoration: underline;

//   @media (max-width: 767px) {
//     font-size: 1rem;
//   }
// `;
export const StoreDetail = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
  padding-bottom: 0.8rem;
  //color: #808080;

  @media (max-width: 767px) {
    font-size: 1.4rem;
  }
  @media (max-width: 412px) {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

export const DivideLine = styled.div`
  width: 75%;
  border-bottom: 2px solid rgba(101, 101, 101, 0.5); ;
`;

export const InfoWrapper = styled.div`
  margin-top: 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const InfoTitle = styled.div`
  font-size: 2rem;
  font-weight: 700;

  margin-bottom: 3rem;
`;
export const Information = styled.div`
  margin-bottom: 6rem;
  font-size: 1rem;
  text-align: center;
  width: 60rem;
  height: 100%;
  border: 1px solid red;

  @media (max-width: 767px) {
    width: 33rem;
  }
  @media (max-width: 412px) {
    width: 22rem;
  }
`;
export const EventImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const InfoImg1 = styled.img`
  width: 70%;
  margin-bottom: 2rem;
  @media (max-width: 767px) {
    width: 300px;
  }
`;
export const InfoImg2 = styled.img`
  width: 65%;
  @media (max-width: 767px) {
    width: 300px;
  }
  @media (max-width: 767px) {
    width: 300px;
  }
`;
export const ImgBox = styled.div`
  width: 55%;

  display: flex;
  flex-direction: row;
  justify-content: space-around;

  margin-top: 2rem;
  margin-bottom: 2rem;
`;
export const InfoImg3 = styled.img`
  width: 45%;
`;
export const InfoImg4 = styled.img`
  width: 45%;
`;
export const InfoImg5 = styled.img`
  width: 45%;
`;
export const MoveLink = styled.a`
  color: #fff;
  text-decoration-line: none;
`;
export const MoveToSiteBtn = styled.button`
  width: 38%;
  height: 5rem;
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 15px;
  background: #2e2e2e;
  border: none;

  margin-top: 10rem;
  margin-bottom: 10rem;
  color: white;
  cursor: pointer;

  @media (max-width: 767px) {
    font-size: 1.3rem;
    width: 60%;
    height: 5rem;
  }
  @media (max-width: 412px) {
    font-size: 1.4rem;

    height: 5rem;
  }
`;
export const WithItemWrapper = styled.div`
  text-align: center;
  width: 100%;
  margin-top: 10rem;
  @media (max-width: 767px) {
    margin-bottom: 5rem;
  }
  @media (max-width: 412px) {
    margin-bottom: 3rem;
  }
`;
export const WithItemTitle = styled.div`
  font-size: 2.5rem;
  font-weight: 600;

  margin-bottom: 1rem;

  @media (max-width: 767px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  @media (max-width: 412px) {
    font-size: 2rem;
  }
`;
export const WithItemSubTitle = styled.div`
  font-size: 1.5rem;
  color: #878787;
  font-weight: 350;

  margin-bottom: 3rem;

  @media (max-width: 767px) {
    font-size: 1.6em;
    margin-bottom: -1rem;
  }
  @media (max-width: 412px) {
    font-size: 1.5rem;
  }
`;

// 가로 스크롤
export const WithItemBox = styled.div`
  width: 75rem;
  height: 25rem;
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
  margin-bottom: 6rem;
  @media (max-width: 767px) {
    width: 350px;
    height: 350px;
  }
  @media (max-width: 412px) {
    width: 350px;
    height: 350px;
  }
`;

export const WithItemImg = styled.img`
  width: 23rem;
  height: 23rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 24px;
  cursor: pointer;
  @media (max-width: 767px) {
    width: 20rem;
    height: 20rem;
  }
  @media (max-width: 412px) {
    width: 18rem;
    height: 18rem;
  }
`;
