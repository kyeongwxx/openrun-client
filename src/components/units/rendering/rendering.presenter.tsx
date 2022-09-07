import * as s from "./rendering.styles";
import { useInView } from "react-intersection-observer";

export default function RenderingUI() {
  const [ref, inView] = useInView({
    root: null,
    // root: ,
    rootMargin: "400px",
    threshold: 0,
  });

  return (
    <s.Wrapper>
      <s.EventWrapper>
        <s.Box1>
          <s.Divi className={inView ? "isActive" : ""} ref={ref}>
            <s.ItemImg
              src="/img/queue.png"
              className={inView ? "isActive" : ""}
              ref={ref}
            ></s.ItemImg>
          </s.Divi>
          <s.TextBox>
            <s.TextLine1>
              <s.Text1>SNS에서 본</s.Text1>
              <s.Text2>맛집</s.Text2>
              {/* <s.Text1>운동화</s.Text1> */}
            </s.TextLine1>
            <s.TextLine2>줄서서 기다리기 지치셨나요?</s.TextLine2>
          </s.TextBox>
        </s.Box1>
        <s.Box2>
          <s.TextBox2>
            <s.TextLine1>
              <s.Text1>사고싶은</s.Text1>
              <s.Text2>한정판</s.Text2>
              <s.Text1>운동화</s.Text1>
            </s.TextLine1>
            <s.TextLine2>연차내고 줄서기는 부담스러우신가요?</s.TextLine2>
          </s.TextBox2>
          <s.DiviMiddle className={inView ? "isActive" : ""} ref={ref}>
            <s.ItemImg2
              src="/img/shoes2.png"
              className={inView ? "isActive" : ""}
              ref={ref}
            />
          </s.DiviMiddle>
        </s.Box2>
        <s.Box3>
          <s.DiviBottom className={inView ? "isActive" : ""} ref={ref}>
            <s.ItemImg3
              src="/img/shoes2.png"
              className={inView ? "isActive" : ""}
              ref={ref}
            />
          </s.DiviBottom>
          <s.TextBox>
            <s.TextLine1>
              <s.Text1>사고싶은</s.Text1>
              <s.Text2>한정판</s.Text2>
              <s.Text1>운동화</s.Text1>
            </s.TextLine1>
            <s.TextLine2>연차내고 줄서기는 부담스러우신가요?</s.TextLine2>
          </s.TextBox>
        </s.Box3>
      </s.EventWrapper>
    </s.Wrapper>
  );
}
