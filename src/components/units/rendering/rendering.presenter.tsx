import * as s from "./rendering.styles";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";
import * as React from "react";
import { useMoveToPage } from "../../commons/hooks/useMoveToPage";

export default function RenderingUI() {
  const [ref, inView] = useInView({
    // root: null,
    rootMargin: "1000px",
    threshold: 0.1,
  });
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <s.Wrapper>
      <s.EventWrapper>
        <s.Box>
          <s.TextBox>
            <s.TextMid>실패없는 줄서기</s.TextMid>
            <s.TextBig>이제 오픈런과 함께 하세요</s.TextBig>
            <s.TextSmall>
              SNS에서 본 맛집, 한정판 운동화, 유명 디자이너와 콜라보한 한정판
              의류! <br /> 오픈런 시간과 당신의 스케줄이 맞지 않으시다면
              오픈런을 이용해보세요
            </s.TextSmall>
          </s.TextBox>
          <s.MoveToBtn onClick={onClickMoveToPage(`/main/`)}>
            시작하기
          </s.MoveToBtn>
          <s.ImgDiv className={inView ? "isActive" : ""} ref={ref}>
            <s.ItemImg
              src="/img/queue.png"
              className={inView ? "isActive" : ""}
              ref={ref}
            ></s.ItemImg>
          </s.ImgDiv>
        </s.Box>

        <s.Box2>
          <s.TextBox>
            <s.TextMid>1:1 매칭 러너를 찾아보세요</s.TextMid>
            <s.TextSmall>
              오픈런은 당신의 소중한 시간과 아이템을 지켜드립니다.
              <br />
              바쁜 일상 속에서도 소중한 아이템을 놓칠 수 없는 당신을 위해서
              <br />
              오픈러너를 모집하고 성공률을 확인한 후에 러너를 채택해보세요.
            </s.TextSmall>
          </s.TextBox>
          <s.ImgInfoBox>
            <s.ImgDiv2 className={inView ? "isActive" : ""} ref={ref}>
              <s.ItemImg2
                src="/img/landingImg.png"
                className={inView ? "isActive" : ""}
                ref={ref}
              />
            </s.ImgDiv2>
            <s.TextWrapper>
              <s.TextComponent>
                원하는 상품의 오픈런 정보를 등록합니다
              </s.TextComponent>
              <s.GrayLine />
              <s.TextComponent>러너를 모집합니다</s.TextComponent>
              <s.GrayLine />
              <s.TextComponent>
                채택된 러너와 채팅으로 오픈런을 진행합니다
              </s.TextComponent>
            </s.TextWrapper>
          </s.ImgInfoBox>
        </s.Box2>

        <s.Box3>
          <s.Box3Wrapper>
            <s.TextBox>
              <s.TextMid>채팅을 통해 러너와 대화해보세요</s.TextMid>
              <s.TextSmall>
                오픈 러너와 실시간으로 편안하게 소통하세요
                <br />
                언제 행사장에 도착해서 대기를 해야하는지 어디쯤에 대기하고
                있는지
                <br />
                개인 연락처를 주고 받지 않아도 서로의 위치를 확인할 수 있어요
              </s.TextSmall>
            </s.TextBox>
            <s.ImgWrapper>
              <s.ImgDiv3 className={inView ? "isActive" : ""} ref={ref}>
                <s.ItemImg3
                  src="/img/Group 96.png"
                  className={inView ? "isActive" : ""}
                  ref={ref}
                />
              </s.ImgDiv3>
              <s.ImgDiv4 className={inView ? "isActive" : ""} ref={ref}>
                <s.ItemImg4
                  src="/img/Group 25.png"
                  className={inView ? "isActive" : ""}
                  ref={ref}
                />
              </s.ImgDiv4>
            </s.ImgWrapper>
          </s.Box3Wrapper>
        </s.Box3>

        <s.Box4>
          <s.TextBox>
            <s.TextMid>고객님들의 후기를 들어보세요</s.TextMid>
            <s.TextSmall>
              고객님들의 생생한 실제 사용 후기 입니다
              <br />
              더 많은 사용 후기를 구경하러 오세요
              <br />
              득템할 수 있는 기회를 오픈런을 통해서 잡으세요
            </s.TextSmall>
          </s.TextBox>
          <s.ImgDiv5 className={inView ? "isActive" : ""} ref={ref}>
            <s.ItemImg5
              src="/img/Group 98.png"
              className={inView ? "isActive" : ""}
              ref={ref}
            ></s.ItemImg5>
            <s.ItemImg6
              src="/img/Group 99.png"
              className={inView ? "isActive" : ""}
              ref={ref}
            ></s.ItemImg6>
            <s.ItemImg7
              src="/img/Group 100.png"
              className={inView ? "isActive" : ""}
              ref={ref}
            ></s.ItemImg7>
          </s.ImgDiv5>
        </s.Box4>

        <s.BottomWrapper>
          <s.BottomMentWrapper>
            <s.Gradation>오픈런</s.Gradation>
            <s.BottomMent>, 지금 바로 시작하세요</s.BottomMent>
          </s.BottomMentWrapper>
          <s.HomeBtn onClick={onClickMoveToPage(`/main/`)}>
            홈페이지로 이동하기
          </s.HomeBtn>
        </s.BottomWrapper>
      </s.EventWrapper>
    </s.Wrapper>
  );
}
