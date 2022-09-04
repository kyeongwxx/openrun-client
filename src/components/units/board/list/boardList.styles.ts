import styled from "@emotion/styled";

export const Wrapper = styled.main`
  width: 95%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 5rem;
  padding-bottom: 2rem;
`;
export const CategoryItem = styled.div`
  font-size: 1.25rem;
  font-weight: 400;
  color: #5e5e5e;
  padding-right: 2.188rem;
`;
export const DivideLine1 = styled.div`
  width: 75%;
  border-bottom: 2px solid rgba(101, 101, 101, 0.5); ;
`;
export const FilterWrapper = styled.div`
  width: 75%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 3.313rem;
  padding-bottom: 2.375rem;
`;
export const SearchBarWrapper = styled.div`
  width: 15%;
  height: 36px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #f8f8f8;
  border-radius: 8px;
  margin-left: 1.563rem;
  padding-left: 0.688rem;
`;
export const SearchIcon = styled.img`
  width: 1rem;
  height: 1rem;
`;
export const SearchInput = styled.input`
  width: 100%;
  border: none;
  background: #f8f8f8;
`;
export const ProductWrapper = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
`;
export const ProductInnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 5rem;
`;
export const ProductInfoWrapper = styled.div`
  width: 24%;
  position: relative;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  @media (max-width: 767px) {
    width: 48%;
  }
`;
export const ImageWrapper = styled.div`
  padding-bottom: 2.125rem;
`;
export const ProductImage = styled.img`
  width: 100%;
`;
export const DateWrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 2%;
  left: 4%;
  color: #ffffff;
`;
export const DateWrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 2%;
  left: 4%;
  color: #555;
`;
export const Month = styled.div`
  font-weight: 400;
  font-size: 1.125rem;
`;
export const DivideLine2 = styled.div`
  border-bottom: 2px solid;
  width: 2.156rem;
  margin: 0.5rem 0;
`;
export const Day = styled.div`
  font-weight: 700;
  font-size: 1.125rem;
`;
export const PickIconWhite = styled.img`
  position: absolute;
  top: 2%;
  right: 4%;
`;
export const UpperInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.563rem;
`;
export const Brand = styled.div`
  font-weight: 700;
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.7);
  padding: 0 10px;
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
export const Name = styled.div`
  font-weight: 700;
  font-size: 1.25rem;
  color: #000000;
  padding: 0 10px;
  padding-bottom: 0.813rem;
`;
export const Contents = styled.div`
  font-weight: 400;
  font-size: 0.875rem;
  color: #656565;
  padding: 0 10px;
  padding-bottom: 0.688rem;
`;
export const Writer = styled.div`
  font-weight: 700;
  font-size: 0.875rem;
  color: #a3a3a3;
  padding: 0 10px;

  padding-bottom: 0.688rem;
`;
export const Price = styled.div`
  width: 100%;
  text-align: right;
  font-weight: 700;
  font-size: 1.5rem;
  color: #000000;
  padding: 10px;
`;
