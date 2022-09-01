import * as s from "./signUp.styles";

export default function SignUpUI() {
  return (
    <s.Wrapper>
      <s.Title>회원가입</s.Title>
      <s.Wrapper01>
        <s.Input01 placeholder="아이디" type="text"></s.Input01>
        <s.Btn01>중복확인</s.Btn01>
      </s.Wrapper01>
      <s.Wrapper01>
        <s.Input01 placeholder="휴대전화" type="text"></s.Input01>
        <s.Btn01>인증하기</s.Btn01>
      </s.Wrapper01>
      <s.Input02 placeholder="인증번호" type="text"></s.Input02>
      <s.Input02 placeholder="비밀번호" type="password"></s.Input02>
      <s.Input02 placeholder="비밀번호 확인" type="password"></s.Input02>
      <s.AgreeWrapper>
        <s.AgreeBtn></s.AgreeBtn>
        <s.AgreeText>전체동의</s.AgreeText>
      </s.AgreeWrapper>
      <s.DivideLine></s.DivideLine>
      <s.EssentialWrapper>
        <s.BtnWrapper>
          <s.EssentialBtn></s.EssentialBtn>
          <s.EssentialText>(필수) 개인정보 수집 및 이용 동의</s.EssentialText>
        </s.BtnWrapper>
        <s.DetailText>자세히 보기</s.DetailText>
      </s.EssentialWrapper>
      <s.SelectWrapper>
        <s.BtnWrapper>
          <s.SelectBtn></s.SelectBtn>
          <s.SelectText>(선택) 이벤트 소식 등 알림 정보 받기</s.SelectText>
        </s.BtnWrapper>
        <s.DetailText>자세히 보기</s.DetailText>
      </s.SelectWrapper>
      <s.SignUpBtn>회원가입하기</s.SignUpBtn>
    </s.Wrapper>
  );
}
