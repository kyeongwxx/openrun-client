import * as s from "./myPage.styles";
export default function MyPageUI(props) {
  return (
    <s.Wrapper>
      <s.Button onClick={props.onClickTop} />
      <s.ActiveListWrapper>
        <s.ActiveTitle>거래중인 제품</s.ActiveTitle>
        <s.ActiveImages>
          <s.ActiveImage height="300px" />
          <s.ActiveImage height="300px" />
          <s.ActiveImage height="300px" />
          <s.ActiveImage height="300px" />
        </s.ActiveImages>
      </s.ActiveListWrapper>
      <s.DivideLineHorizontal color="#F2F2F2" />
      <s.ActiveListWrapper>
        <s.ActiveTitle>채딩중인 대화</s.ActiveTitle>
        <s.ActiveImages>
          <s.ActiveImage height="150px" />
          <s.ActiveImage height="150px" />
          <s.ActiveImage height="150px" />
          <s.ActiveImage height="150px" />
        </s.ActiveImages>
      </s.ActiveListWrapper>
      <s.DivideLineHorizontal color="#F2F2F2" />
      <s.ActiveListWrapper>
        <s.ActiveTitle>오늘 본 제품</s.ActiveTitle>
        <s.ActiveImages>
          <s.ActiveImage height="300px" />
          <s.ActiveImage height="300px" />
          <s.ActiveImage height="300px" />
          <s.ActiveImage height="300px" />
        </s.ActiveImages>
      </s.ActiveListWrapper>
    </s.Wrapper>
  );
}
//id="scroll" ref={scrollRef}
