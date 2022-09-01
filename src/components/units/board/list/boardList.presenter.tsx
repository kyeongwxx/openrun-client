import * as s from "./boardList.styles";
import Pick from "../../../../../public/Pick.svg";
import NikeShoes from "../../../../../public/NikeShoes.png";

export default function BoardListUI() {
  return (
    <s.Wrapper>
      <s.CategoryWrapper>
        <s.CategoryItem>ALL</s.CategoryItem>
        <s.CategoryItem>FASHION</s.CategoryItem>
        <s.CategoryItem>ACC</s.CategoryItem>
        <s.CategoryItem>DIGITAL</s.CategoryItem>
        <s.CategoryItem>FOOD</s.CategoryItem>
        <s.CategoryItem>TOY</s.CategoryItem>
      </s.CategoryWrapper>
      <s.DivideLine></s.DivideLine>
      <s.ProductWrapper>
        <s.DateWrapper>
          <s.Day>s</s.Day>
          <s.Date>16</s.Date>
        </s.DateWrapper>
        <s.ProductInfoWrapper>
          <s.ProductImg src="/NikeShoes.png" />
          <s.Product>
            <s.InnerWrapper>
              <s.Brand>NIKE</s.Brand>
            </s.InnerWrapper>
            <s.Name>오픈런 한정판 나이키 덩크</s.Name>
            <s.Address>서울시 강남구 압구정동 343 갤러리아</s.Address>
            <s.SellDate>2022.09.16 - 2022.09.20</s.SellDate>
            <s.Price>10,000원</s.Price>
          </s.Product>
        </s.ProductInfoWrapper>
        <Pick />
      </s.ProductWrapper>
      <s.ProductWrapper>
        <s.DateWrapper1></s.DateWrapper1>
        <s.ProductInfoWrapper>
          <s.ProductImg src="/NikeShoes.png" />
          <s.Product>
            <s.InnerWrapper>
              <s.Brand>NIKE</s.Brand>
            </s.InnerWrapper>
            <s.Name>오픈런 한정판 나이키 덩크</s.Name>
            <s.Address>서울시 강남구 압구정동 343 갤러리아</s.Address>
            <s.SellDate>2022.09.16 - 2022.09.20</s.SellDate>
            <s.Price>10,000원</s.Price>
          </s.Product>
        </s.ProductInfoWrapper>
        <Pick />
      </s.ProductWrapper>
      <s.ProductWrapper>
        <s.DateWrapper1></s.DateWrapper1>
        <s.ProductInfoWrapper>
          <s.ProductImg src="/NikeShoes.png" />
          <s.Product>
            <s.InnerWrapper>
              <s.Brand>NIKE</s.Brand>
            </s.InnerWrapper>
            <s.Name>오픈런 한정판 나이키 덩크</s.Name>
            <s.Address>서울시 강남구 압구정동 343 갤러리아</s.Address>
            <s.SellDate>2022.09.16 - 2022.09.20</s.SellDate>
            <s.Price>10,000원</s.Price>
          </s.Product>
        </s.ProductInfoWrapper>
        <Pick />
      </s.ProductWrapper>
      <s.DivideLine1></s.DivideLine1>
      <s.ProductWrapper>
        <s.DateWrapper>
          <s.Day>m</s.Day>
          <s.Date>17</s.Date>
        </s.DateWrapper>
        <s.ProductInfoWrapper>
          <s.ProductImg src="/NikeShoes.png" />
          <s.Product>
            <s.InnerWrapper>
              <s.Brand>NIKE</s.Brand>
            </s.InnerWrapper>
            <s.Name>오픈런 한정판 나이키 덩크</s.Name>
            <s.Address>서울시 강남구 압구정동 343 갤러리아</s.Address>
            <s.SellDate>2022.09.16 - 2022.09.20</s.SellDate>
            <s.Price>10,000원</s.Price>
          </s.Product>
        </s.ProductInfoWrapper>
        <Pick />
      </s.ProductWrapper>
      <s.ProductWrapper1>
        <s.DateWrapper1></s.DateWrapper1>
        <s.ProductInfoWrapper>
          <s.ProductImg src="/NikeShoes.png" />
          <s.Product>
            <s.InnerWrapper>
              <s.Brand>NIKE</s.Brand>
            </s.InnerWrapper>
            <s.Name>오픈런 한정판 나이키 덩크</s.Name>
            <s.Address>서울시 강남구 압구정동 343 갤러리아</s.Address>
            <s.SellDate>2022.09.16 - 2022.09.20</s.SellDate>
            <s.Price>10,000원</s.Price>
          </s.Product>
        </s.ProductInfoWrapper>
        <Pick />
      </s.ProductWrapper1>
    </s.Wrapper>
  );
}
