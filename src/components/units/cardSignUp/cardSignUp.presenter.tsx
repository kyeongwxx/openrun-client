import * as s from "./cardSignup.styles";

export default function CardSignUpUI() {
  return (
    <s.Wrapper>
      <s.CardWrapper>
        <s.Title>카드 등록하기</s.Title>
        <s.InfoInput placeholder="카드사 선택"></s.InfoInput>
        <s.InfoInput placeholder="카드번호"></s.InfoInput>

        <s.DurationWrapepr>
          <s.InfoInputM placeholder="유효기간 월"></s.InfoInputM>
          <s.InfoInputY placeholder="유효기간 년"></s.InfoInputY>
        </s.DurationWrapepr>

        <s.InfoInput placeholder="생년월일 6자리"></s.InfoInput>
        <s.AssignBtn>등록</s.AssignBtn>
      </s.CardWrapper>
    </s.Wrapper>
  );
}
