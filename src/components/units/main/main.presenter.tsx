import * as s from "./main.styles";
export default function MainUI() {
  return (
    <s.Wrapper>
      <s.AdCarousel>캐러셀</s.AdCarousel>
      <s.DateCarousel>달력 영역</s.DateCarousel>
      <s.EventProductWrapper>
        {/* 나중에 map으로 처리 */}
        <s.EventProduct>
          <s.ProductImg />
          <s.ProductText>
            <s.H3>Nike</s.H3>
            <s.H2>오픈런 한정판 나이키</s.H2>
            <s.H5>2022.xx.xx</s.H5>
            <s.H2>10,000원</s.H2>
          </s.ProductText>
        </s.EventProduct>
        <s.EventProduct>
          <s.ProductImg />
          <s.ProductText></s.ProductText>
        </s.EventProduct>
        <s.EventProduct>
          <s.ProductImg />
          <s.ProductText></s.ProductText>
        </s.EventProduct>
        <s.EventProduct>
          <s.ProductImg />
          <s.ProductText></s.ProductText>
        </s.EventProduct>
        <s.EventProduct>
          <s.ProductImg />
          <s.ProductText></s.ProductText>
        </s.EventProduct>
      </s.EventProductWrapper>
      <s.BestProductWrapper>
        <s.BestProductText>
          <s.H1>Monthly Best</s.H1>
          <s.TEXT>이달의 베스트 상품</s.TEXT>
        </s.BestProductText>
        <s.BestProductCategory>
          <s.Category></s.Category>
          <s.CategoryImages>
            <s.CategoryImage />
            <s.CategoryImage />
            <s.CategoryImage />
            <s.CategoryImage />
            <s.CategoryImage />
          </s.CategoryImages>
        </s.BestProductCategory>
      </s.BestProductWrapper>
    </s.Wrapper>
  );
}
