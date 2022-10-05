import * as s from "./signIn.styles";
import Naver from "../../../../public/Naver.svg";
import Google from "../../../../public/Google.svg";
import Kakao from "../../../../public/Kakao.svg";
import SignInput from "../../../commons/input/sign";
import { ISignInProps } from "./signIn.types";

import BlackButton from "../../../commons/button/black";
import YupWarningMsg from "../../../commons/div/yupWarningMsg";

export default function SignInUI(props: ISignInProps) {
  return (
    <s.Wrapper>
      <s.LoginWrapper>
        <s.Title>로그인</s.Title>

        <form
          onSubmit={props.handleSubmit(props.onClickSignIn)}
          style={{ width: "100%" }}
        >
          <SignInput
            register={props.register}
            placeholder="EMAIL"
            color="#000000"
            width="100%"
            name={"email"}
            type="text"
          />
          <YupWarningMsg errormsg={props.formState.errors.email?.message} />

          <SignInput
            register={props.register}
            placeholder="PW"
            color="#000000"
            width="100%"
            name="password"
            type="password"
          />
          <YupWarningMsg errormsg={props.formState.errors.password?.message} />

          {/* <s.IdSaveWrapper>
            <s.IdSaveBtn></s.IdSaveBtn>
            <s.IdSaveText>아이디 저장</s.IdSaveText>
          </s.IdSaveWrapper> */}

          <BlackButton
            onClick={props.onClickSignIn}
            type="submit"
            width="100%"
            fontWeight="700"
            title="로그인"
          />
        </form>

        <s.DivideLine />
        <s.SocialTitle>SNS 계정 로그인</s.SocialTitle>
        <s.SocialBtns>
          <s.NaverLogin onClick={props.onClickNaver}>
            <Naver />
          </s.NaverLogin>
          <s.GoogleLogin onClick={props.onClickGoolge}>
            <Google />
          </s.GoogleLogin>
          <s.KakaoLogin onClick={props.onClickKakao}>
            <Kakao />
          </s.KakaoLogin>
        </s.SocialBtns>
      </s.LoginWrapper>
    </s.Wrapper>
  );
}
