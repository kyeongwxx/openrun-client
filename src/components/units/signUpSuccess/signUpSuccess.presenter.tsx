import * as s from "./signUpSuccess.styles";

export default function SignUpSuccessUI() {
  return (
    <s.Wrapper>
      <s.LoginSuccessWrapper>
        <s.Welcome>환영합니다. OOO님</s.Welcome>
        <s.WelcomeMention>
          회원가입이 정상적으로 완료되었습니다.
        </s.WelcomeMention>
        <s.HomeBtn>홈으로 가기</s.HomeBtn>
        <s.CardBtn>카드 등록하기</s.CardBtn>
      </s.LoginSuccessWrapper>
    </s.Wrapper>
  );
}
