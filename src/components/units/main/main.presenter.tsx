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
      <s.ProductWrapper>
        <s.ProductWrapperText>
          <s.H1>Weekly Best</s.H1>
          <s.TEXT>이주의 베스트 상품</s.TEXT>
        </s.ProductWrapperText>
        <s.BestProductCategory>
          <s.Category>
            <s.TEXT>Best Shoes</s.TEXT>
            <s.TEXT>Best Bag</s.TEXT>
            <s.TEXT>Best Acc</s.TEXT>
            <s.TEXT>Best Digital</s.TEXT>
            <s.TEXT>Best Food</s.TEXT>
          </s.Category>
          <s.CategoryImages>
            <s.CategoryImage src="/img/example1.png" />
            <s.CategoryImage />
            <s.CategoryImage />
            <s.CategoryImage />
            <s.CategoryImage />
          </s.CategoryImages>
        </s.BestProductCategory>
      </s.ProductWrapper>
      <s.ProductWrapper>
        <s.ProductWrapperText>
          <s.H1>Brand New Items</s.H1>
          <s.TEXT>신상품을 한눈에</s.TEXT>
        </s.ProductWrapperText>
        <s.NewProductCategory>
          <s.NewItemsImages>
            <s.NewItemsImage />
            <s.NewItemsImage />
            <s.NewItemsImage />
          </s.NewItemsImages>
        </s.NewProductCategory>
      </s.ProductWrapper>
      <s.Banner src="/img/subBanner.png"></s.Banner>
      <s.ProductWrapper>
        <s.ProductWrapperText>
          <s.H1>Openrun News</s.H1>
          <s.TEXT>오픈런이 전하는 다향한 소식</s.TEXT>
        </s.ProductWrapperText>
        <s.NewsCategory>
          <s.NewsImages>
            <s.NewsImage />
          </s.NewsImages>
          <s.NewsImages>
            <s.NewsImage />
          </s.NewsImages>
        </s.NewsCategory>
      </s.ProductWrapper>
    </s.Wrapper>
  );
}
