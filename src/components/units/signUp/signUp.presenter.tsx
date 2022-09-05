import { useRecoilState } from "recoil";
import BlackButton from "../../../commons/button/black";
import SignInput from "../../../commons/input/sign";

import * as s from "./signUp.styles";
import { ISignUpProps } from "./signUp.types";

import CheckBox from "../../../commons/checkBox";

export default function SignUpUI(props: ISignUpProps) {
  return (
    <s.Wrapper>
      <s.Title>회원가입</s.Title>

      <form onSubmit={props.handleSubmit(props.onClickSignUp)}>
        <SignInput
          register={props.register}
          placeholder="아이디"
          color="#000000"
          width="100%"
          name="id"
          type="text"
        />
        <SignInput
          register={props.register}
          placeholder="닉네임"
          color="#000000"
          width="100%"
          name="nickname"
          type="text"
        />
        <SignInput
          register={props.register}
          placeholder="비밀번호"
          color="#000000"
          width="100%"
          name="password"
          type="password"
        />
        <SignInput
          register={props.register}
          placeholder="비밀번호 확인"
          color="#000000"
          width="100%"
          name="passwordCheck"
          type="password"
        />

        <SignInput
          register={props.register}
          placeholder="휴대전화"
          color="#000000"
          width="70%"
          name="phone"
          type="text"
        />
        <BlackButton
          onClick={props.onClickSendCertificationNum}
          type="button"
          width="30%"
          fontWeight="700"
          title="인증하기"
        />

        <SignInput
          register={props.register}
          placeholder="인증번호"
          color="#000000"
          width="70%"
          name="phoneCheck"
          type="text"
        />
        <BlackButton
          onClick={props.onClickPhoneCertify}
          type="button"
          width="30%"
          fontWeight="700"
          title="확인"
        />

        <CheckBox
          totalAgree="전체동의"
          essential="(필수) 개인정보 수집 및 이용 동의"
          choice="(선택) 이벤트 소식 등 알림 정보 받기"
        />
        {/* <s.AgreeWrapper>
          <Radio.Group
            onChange={props.onChangeRadio}
            value={selectedValue}
            style={{ width: "100%" }}
          >
            <s.RadioWrapper>
              <Radio value={1} />
              <s.DetailText>전체동의</s.DetailText>
            </s.RadioWrapper>

            <s.DivideLine></s.DivideLine>
            <s.EssentialWrapper>
              <s.RadioWrapper>
                <Radio value={2} defaultChecked={true} />
                <s.DetailText>(필수) 개인정보 수집 및 이용 동의</s.DetailText>
              </s.RadioWrapper>

              <s.DetailText>자세히 보기</s.DetailText>
            </s.EssentialWrapper>

            <s.EssentialWrapper>
              <s.RadioWrapper>
                <Radio value={3} />
                <s.DetailText>
                  (선택) 이벤트 소식 등 알림 정보 받기
                </s.DetailText>
              </s.RadioWrapper>
              <s.DetailText>자세히 보기</s.DetailText>
            </s.EssentialWrapper>
          </Radio.Group>
        </s.AgreeWrapper> */}

        <BlackButton
          onClick={props.onClickSignUp}
          type="submit"
          width="100%"
          fontWeight="700"
          title="회원가입"
        />
      </form>
    </s.Wrapper>
  );
}
