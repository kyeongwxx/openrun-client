import MainSlider from "../../../commons/carousel";
import DatePicker from "../../../commons/datePicker";
import * as s from "./main.styles";
import { v4 as uuidv4 } from "uuid";
export default function MainUI(props) {
  return (
    <s.Wrapper>
      <MainSlider
        Src={[
          "/img/carousel/main6.jpeg",
          "/img/carousel/main2.jpeg",
          "/img/carousel/main9.jpeg",
          "/img/carousel/main10.jpeg",
          "/img/carousel/main11.jpeg",
        ]}
      />
      <DatePicker onClickDate={props.onClickDate} color={props.color} />
      <s.EventProductWrapper>
        <s.EventProduct>
          <s.ProductImg />
          <s.ProductTexts>
            <s.ProductText weight="400" size="0.8rem">
              Nike
            </s.ProductText>
            <s.ProductText weight="700" size="1rem">
              오픈런 한정판 나이키
            </s.ProductText>
            <s.ProductText weight="400" size="0.6rem">
              2022.xx.xx
            </s.ProductText>
            <s.ProductText weight="400" size="1rem">
              10,000원
            </s.ProductText>
          </s.ProductTexts>
        </s.EventProduct>
      </s.EventProductWrapper>
      <s.BannerImg height="690px" url="/img/rectangle2.png">
        <s.ProductWrapperText>
          <s.H1 color="#333">Best Runner Ranking</s.H1>
          <s.TEXT color="#333">우리가 사랑하는 베스트 러너 순위</s.TEXT>
        </s.ProductWrapperText>
        <s.BestRunners>
          {props.data?.map((el, index) => (
            <s.BestRunner>
              <s.Ranking>
                <s.RankingText>{index + 1}</s.RankingText>
              </s.Ranking>
              <s.RunnerInfo>
                <s.RunnerImg
                  src={
                    !el.profileImg
                      ? "/img/profile.png"
                      : `https://storage.googleapis.com/openrun-storage/${el.profileImg}`
                  }
                />
                <s.TextWrapper>
                  <s.RunnerText weight="700" size="1rem" color="#333">
                    {el?.nickName}
                  </s.RunnerText>
                  <s.RunnerText weight="400" size="0.8rem" color="#1F8716">
                    성공률 {el?.successRate}%
                  </s.RunnerText>
                </s.TextWrapper>
              </s.RunnerInfo>
            </s.BestRunner>
          ))}
        </s.BestRunners>
      </s.BannerImg>
      <s.ProductWrapper>
        <s.ProductWrapperText>
          <s.H1 color="#333">Best Pick</s.H1>
          <s.TEXT color="#333">찜 많이 받은 글</s.TEXT>
        </s.ProductWrapperText>
        <s.BestProductCategory>
          <s.Category>
            {props.category.map((el, index) => (
              <s.TEXT key={uuidv4()} onClick={props.onClickCategory(el, index)}>
                {el}
              </s.TEXT>
            ))}
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
      <s.BannerDiv>
        <s.H1 color="#4E6781">러너 1:1 매칭 </s.H1>
        <s.BannerText>
          어려웠던 줄서기 오픈런과 함께하면 쉬어집니다.
        </s.BannerText>
      </s.BannerDiv>
    </s.Wrapper>
  );
}
