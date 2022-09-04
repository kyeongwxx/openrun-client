import { RadioChangeEvent } from "antd";
import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";

import SignUpUI from "./signUp.presenter";

export default function SignUp() {
  const { register, handleSubmit, formState } = useForm({
    // resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSignUp = () => {};
  const onClickPhoneCertify = () => {};
  const onClickSendCertificationNum = () => {};
  return (
    <SignUpUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSignUp={onClickSignUp}
      onClickSendCertificationNum={onClickSendCertificationNum}
      onClickPhoneCertify={onClickPhoneCertify}
    />
  );
}
