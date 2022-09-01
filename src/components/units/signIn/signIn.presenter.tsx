import * as s from "./signIn.styles";
import Naver from "../../../../public/Naver.svg";
import Google from "../../../../public/Google.svg";
import Kakao from "../../../../public/Kakao.svg";
import VerticalDivideLine from "../../../../public/VerticalDivideLine.svg";

export default function SignInUI() {
  return (
    <s.Wrapper>
      <s.LoginWrapper>
        <s.Title>로그인</s.Title>
        <s.InfoInput placeholder="ID" type="text"></s.InfoInput>
        <s.InfoInput placeholder="PW" type="password"></s.InfoInput>
        <s.IdSaveWrapper>
          <s.IdSaveBtn></s.IdSaveBtn>
          <s.IdSaveText>아이디 저장</s.IdSaveText>
        </s.IdSaveWrapper>
        <s.LoginBtn>로그인</s.LoginBtn>
        <s.SearchWrapper>
          <s.Text>회원가입</s.Text>
          <VerticalDivideLine />
          <s.Text>아이디 찾기</s.Text>
          <VerticalDivideLine />
          <s.Text>비밀번호 찾기</s.Text>
        </s.SearchWrapper>
        <s.DivideLine></s.DivideLine>
        <s.SocialTitle>SNS 계정 로그인</s.SocialTitle>
        <s.SocialBtns>
          <s.NaverLogin>
            <Naver />
          </s.NaverLogin>
          <s.GoogleLogin>
            <Google />
          </s.GoogleLogin>
          <s.KakaoLogin>
            <Kakao />
          </s.KakaoLogin>
        </s.SocialBtns>
      </s.LoginWrapper>
    </s.Wrapper>
  );
}
