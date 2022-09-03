import MainSlider from "../../../commons/carousel";
import DatePicker from "../../../commons/datePicker";
import * as s from "./main.styles";
export default function MainUI() {
  return (
    <s.Wrapper>
      <MainSlider Src="/img/mainBanner.png" />

      <DatePicker></DatePicker>
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
          <s.H1 color="#333">Weekly Best</s.H1>
          <s.TEXT color="#333">이주의 베스트 상품</s.TEXT>
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
          <s.H1 color="#333">Brand New Items</s.H1>
          <s.TEXT color="#333">신상품을 한눈에</s.TEXT>
        </s.ProductWrapperText>
        <s.NewProductCategory>
          <s.NewItemsImages>
            <s.NewItemsImage />
            <s.NewItemsImage />
            <s.NewItemsImage />
          </s.NewItemsImages>
        </s.NewProductCategory>
      </s.ProductWrapper>
      <s.Banner>
        <s.BannerWrapperText>
          <s.H1 color="#fff">Openrun 회원에게 드리는 혜택 </s.H1>
          <s.TEXT color="#fff">신규 가입 시 포인트 5% 추가 적립</s.TEXT>
        </s.BannerWrapperText>
      </s.Banner>
      <s.ProductWrapper>
        <s.ProductWrapperText>
          <s.H1 color="#333">Openrun News</s.H1>
          <s.TEXT color="#333">오픈런이 전하는 다향한 소식</s.TEXT>
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
