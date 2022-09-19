import MainSlider from "../../../commons/carousel";
import DatePicker from "../../../commons/datePicker";
import * as s from "./main.styles";
import { v4 as uuidv4 } from "uuid";
import { dateSplit } from "../../../commons/function/dateSlice";
import { IMainProps } from "./main.types";

export default function MainUI(props: IMainProps) {
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
      <DatePicker
        onClickDate={props.onClickDate}
        color={props.color}
        MouseLeaveDate={props.MouseLeaveDate}
      />
      <s.EventProductWrapper>
        {props.eventInfo?.length === 0 ? (
          <s.NoData>
            <s.ExclamationMark />
            <s.NodataText>행사 정보가 없습니다.</s.NodataText>
          </s.NoData>
        ) : (
          props.eventInfo?.map((el) => (
            <s.EventProduct key={uuidv4()}>
              <s.ProductImg
                src={`https://storage.googleapis.com/openrun-storage/${el.image}`}
                onClick={props.onClickMoveToDetail(`/eventInfo/${el.id}`)}
              />
              <s.ProductTexts
                onClick={props.onClickMoveToDetail(`/eventInfo/${el.id}`)}
              >
                <s.ProductText weight="400" size="0.8rem">
                  브랜드
                  {el.brand}
                </s.ProductText>
                <s.ProductText weight="700" size="1rem">
                  {el.title}
                </s.ProductText>
                <s.ProductText weight="400" size="0.6rem">
                  {el.location}
                </s.ProductText>
                <s.ProductText weight="400" size="1rem">
                  {dateSplit(el.period)}
                </s.ProductText>
              </s.ProductTexts>
            </s.EventProduct>
          ))
        )}
      </s.EventProductWrapper>
      <s.BannerImg height="690px" url="/img/rectangle2.png">
        <s.ProductWrapperText>
          <s.H1 color="#333">Best Runner Ranking</s.H1>
          <s.TEXT color="#333">우리가 사랑하는 베스트 러너 순위</s.TEXT>
        </s.ProductWrapperText>
        <s.BestRunners>
          {props.data?.map((el, index) => (
            <s.BestRunner key={uuidv4()}>
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
              <s.TEXT key={uuidv4()} onClick={props.onClickCategory(el)}>
                {el}
              </s.TEXT>
            ))}
          </s.Category>
          <s.CategoryImages>
            {props.bestBoards?.length === 0 ? (
              <s.NoData>
                <s.ExclamationMark />
                <s.NodataText>베스트 상품이 없습니다.</s.NodataText>
              </s.NoData>
            ) : (
              props.bestBoards?.map((el, index) => (
                <s.CategoryImage
                  key={uuidv4()}
                  onMouseEnter={() => props.onMouse(index)}
                  onMouseLeave={() => props.onMouse(index)}
                  image={
                    el?.image?.url
                      ? `https://storage.googleapis.com/openrun-storage/${el.image.url}`
                      : "/img/profile.png"
                  }
                >
                  {props.isHover[index] ? (
                    <s.CategoryInfo
                      onClick={props.onClickMoveToDetail(`/board/${el.id}`)}
                    >
                      <s.CategoryWrapper>
                        <s.CategoryText weight="700" size="0.8rem">
                          {el.title}
                        </s.CategoryText>

                        <s.CategoryText weight="700" size="0.8rem">
                          <s.Runner /> 0
                        </s.CategoryText>
                      </s.CategoryWrapper>

                      <s.CategoryText weight="400" size="0.7rem">
                        {dateSplit(el.dueDate)}
                      </s.CategoryText>
                      <s.CategoryText weight="400" size="0.7rem">
                        장소
                        {el.location?.address}
                      </s.CategoryText>
                      <s.CategoryText weight="400" size="0.7rem">
                        {el?.price}
                      </s.CategoryText>
                    </s.CategoryInfo>
                  ) : (
                    <></>
                  )}
                </s.CategoryImage>
              ))
            )}
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
