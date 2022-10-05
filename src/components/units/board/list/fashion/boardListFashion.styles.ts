import styled from "@emotion/styled";

interface IFashionUi {
  isMatched: any;
}

export const Wrapper = styled.main`
  width: 95%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const InnerWrapper = styled.main`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CategoryWrapper = styled.div`
  width: 78%;
  display: flex;
  flex-direction: row;
  padding-top: 5rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid rgba(101, 101, 101, 0.5);
  @media (max-width: 767px) {
    width: 80%;
    flex-direction: column;
  }
`;
export const ResponsiveCategory1 = styled.div`
  @media (max-width: 767px) {
    display: flex;
    flex-direction: row;
    padding-bottom: 1rem;
  }
`;
export const ResponsiveCategory2 = styled.div`
  @media (max-width: 767px) {
    display: flex;
    flex-direction: row;
  }
  @media (max-width: 412px) {
    display: flex;
    flex-direction: row;
    padding-bottom: 1rem;
  }
`;
export const CategoryItem = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 400;
  color: #5e5e5e;
  margin-right: 1rem;
  margin-left: 1rem;
  cursor: pointer;
  :hover {
    background: linear-gradient(93.72deg, #5920d3 0%, #2f88e5 99.32%);
    color: transparent;
    -webkit-background-clip: text;
    font-weight: bold;
  }
`;
export const CategoryFashion = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.25rem;
  margin-right: 1rem;
  margin-left: 1rem;
  cursor: pointer;
  background: linear-gradient(93.72deg, #5920d3 0%, #2f88e5 99.32%);
  color: transparent;
  -webkit-background-clip: text;
  font-weight: bold;
`;
export const DivideLine1 = styled.div`
  width: 78%;
  border-bottom: 2px solid rgba(101, 101, 101, 0.5); ;
`;
export const FilterWrapper = styled.div`
  width: 78%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 3.313rem;
  padding-bottom: 2.375rem;
`;
export const DivideDiv = styled.div`
  width: 5rem;
  @media (max-width: 767px) {
    width: 1rem;
  }
`;
export const SearchBarWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #f8f8f8;
  border-radius: 8px;
  margin-left: 30rem;
  padding-left: 0.688rem;
  margin-bottom: 2.375rem;
  @media (max-width: 767px) {
    width: 78%;
    margin-left: 0;
  }
`;
export const SearchIcon = styled.img`
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
`;
export const SearchInput = styled.input`
  width: 100%;
  border: none;
  background: #f8f8f8;
  font-weight: 700;
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.7);
  :focus {
    outline: none;
  }
`;
export const ProductWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const ProductInfoWrapper = styled.div`
  width: 23%;
  margin: 0px 1%;
  margin-bottom: 2%;
  position: relative;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  @media (max-width: 767px) {
    width: 48%;
  }
`;
export const ImageWrapper = styled.div`
  padding-bottom: 2.125rem;
  width: 100%;
  height: 200px;
  margin: 0 auto;
  overflow: hidden;
  cursor: pointer;
  @media (max-width: 412px) {
    height: 150px;
    padding-bottom: 1rem;
  }
`;
export const ProductImage = styled.img`
  border-radius: 24px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const DateWrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 4%;
  left: 6%;
  border-radius: 24px;
`;

export const Month = styled.div`
  font-weight: 350;
  font-size: 1rem;
  color: #fff;
  z-index: 1;
  text-shadow: 1px 1px 1px #555;
`;
export const Day = styled.div`
  font-weight: 450;
  font-size: 1.4rem;
  color: #fff;
  height: 60px;
  line-height: 15px;
  z-index: 1;
  text-shadow: 1px 1px 1px #555;
`;
export const PickIcon = styled.img`
  position: absolute;
  top: 4%;
  right: 6%;
`;
export const UpperInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.563rem;
`;
export const Category = styled.div`
  font-weight: 700;
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.7);
  padding: 0 20px;
  @media (max-width: 412px) {
    font-size: 0.7rem;
    padding: 0 10px;
  }
`;
export const Region = styled.div`
  width: 25%;
  height: 25px;
  text-align: center;
  line-height: 25px;
  background: #2f88e5;
  border-radius: 40px;
  font-weight: 400;
  font-size: 0.875rem;
  color: #ffffff;
  margin: 0 10px;
  @media (max-width: 412px) {
    font-size: 0.7rem;
  }
`;
export const Region1 = styled.div`
  width: 25%;
  height: 25px;
  text-align: center;
  line-height: 25px;
  background: #2f88e5;
  border-radius: 40px;
  font-weight: 400;
  font-size: 0.875rem;
  color: #ffffff;
  margin: 0 10px;
  @media (max-width: 412px) {
    font-size: 0.7rem;
  }
`;
export const Region2 = styled.div`
  width: 25%;
  height: 25px;
  text-align: center;
  line-height: 25px;
  background: #5920d3;
  border-radius: 40px;
  font-weight: 400;
  font-size: 0.875rem;
  color: #ffffff;
  margin: 0 10px;
  @media (max-width: 412px) {
    font-size: 0.7rem;
  }
`;
export const Region3 = styled.div`
  width: 25%;
  height: 25px;
  text-align: center;
  line-height: 25px;
  background: #7dd03c;
  border-radius: 40px;
  font-weight: 400;
  font-size: 0.875rem;
  color: #ffffff;
  margin: 0 10px;
  @media (max-width: 412px) {
    font-size: 0.7rem;
  }
`;
export const Region4 = styled.div`
  width: 25%;
  height: 25px;
  text-align: center;
  line-height: 25px;
  background: #fee500;
  border-radius: 40px;
  font-weight: 400;
  font-size: 0.875rem;
  color: #ffffff;
  margin: 0 10px;
`;
export const Region5 = styled.div`
  width: 25%;
  height: 25px;
  text-align: center;
  line-height: 25px;
  background: #de7f7f;
  border-radius: 40px;
  font-weight: 400;
  font-size: 0.875rem;
  color: #ffffff;
  margin: 0 10px;
  @media (max-width: 412px) {
    font-size: 0.7rem;
  }
`;
export const Region6 = styled.div`
  width: 25%;
  height: 25px;
  text-align: center;
  line-height: 25px;
  background: #8be1f2;
  border-radius: 40px;
  font-weight: 400;
  font-size: 0.875rem;
  color: #ffffff;
  margin: 0 10px;
  @media (max-width: 412px) {
    font-size: 0.7rem;
  }
`;
export const Region7 = styled.div`
  width: 25%;
  height: 25px;
  text-align: center;
  line-height: 25px;
  background: #4f4f4f;
  border-radius: 40px;
  font-weight: 400;
  font-size: 0.875rem;
  color: #ffffff;
  margin: 0 10px;
  @media (max-width: 412px) {
    font-size: 0.7rem;
  }
`;
export const Title = styled.div`
  font-weight: 700;
  font-size: 1.25rem;
  color: #000000;
  padding: 0 20px;
  padding-bottom: 0.813rem;
  cursor: pointer;
  :hover {
    text-decoration: underline;
    font-weight: bold;
  }
  @media (max-width: 412px) {
    font-size: 0.8rem;
    padding: 0 10px;
  }
`;
export const TitleSpan = styled.span`
  color: ${(props: IFashionUi) => (props.isMatched ? "#bfae90" : "black")};
`;
export const Contents = styled.div`
  font-weight: 400;
  font-size: 0.875rem;
  color: #656565;
  padding: 0 20px;
  padding-bottom: 0.688rem;
  @media (max-width: 412px) {
    font-size: 0.8rem;
    padding: 0 10px;
  }
`;
export const Writer = styled.div`
  font-weight: 700;
  font-size: 0.875rem;
  color: #a3a3a3;
  padding: 0 20px;
  padding-bottom: 0.688rem;
  @media (max-width: 412px) {
    font-size: 0.8rem;
    padding: 0 10px;
  }
`;
export const StatusPriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  padding-bottom: 10px;
  @media (max-width: 412px) {
    font-size: 0.8rem;
    padding: 0 10px;
    padding-bottom: 5px;
  }
`;
export const Status1 = styled.div`
  width: 47px;
  height: 25px;
  text-align: center;
  line-height: 25px;
  font-weight: 400;
  font-size: 0.75rem;
  color: #7dd03c;
  border: 1px solid #7dd03c;
  @media (max-width: 412px) {
    font-size: 0.65rem;
    width: 40px;
    height: 20px;
    line-height: 20px;
  }
`;
export const Status2 = styled.div`
  width: 47px;
  height: 25px;
  text-align: center;
  line-height: 25px;
  font-weight: 400;
  font-size: 0.75rem;
  color: #ff9100;
  border: 1px solid #ff9100;
  @media (max-width: 412px) {
    font-size: 0.65rem;
    width: 40px;
    height: 20px;
    line-height: 20px;
  }
`;
export const Status3 = styled.div`
  width: 47px;
  height: 25px;
  text-align: center;
  line-height: 25px;
  font-weight: 400;
  font-size: 0.75rem;
  color: #d03c3c;
  border: 1px solid #d03c3c;
  @media (max-width: 412px) {
    font-size: 0.65rem;
    width: 40px;
    height: 20px;
    line-height: 20px;
  }
`;
export const Price = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  color: #000000;
  @media (max-width: 412px) {
    font-size: 1rem;
  }
`;
export const FetchMoreBtnWrapper = styled.div`
  width: 15%;
  height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 24px;
  color: #555;
  margin-top: 3rem;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.7);
`;
export const FetchMoreBtn = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  background: none;
  cursor: pointer;
`;
