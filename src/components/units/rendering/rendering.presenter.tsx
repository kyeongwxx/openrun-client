import * as s from "./rendering.styles";

export default function RenderingUI() {
  return (
    <s.Wrapper>
      <s.EventWrapper>
        <s.Box1>
          <s.ItemImg src="/img/shoes.png" />

          <s.TextBox>
            <s.TextLine1>
              <s.Text1>사고싶은</s.Text1>
              <s.Text2>한정판</s.Text2>
              <s.Text1>운동화</s.Text1>
            </s.TextLine1>
            <s.TextLine2>연차내고 줄서기는 부담스러우신가요?</s.TextLine2>
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
          <s.ItemImg2 src="/img/shoes2.png" />
        </s.Box2>
        <s.Box3>
          <s.ItemImg3 src="/img/shoes2.png" />
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
