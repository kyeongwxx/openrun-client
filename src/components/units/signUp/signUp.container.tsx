import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";

import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../commons/types/generated/types";
import { schema } from "../../../commons/yup/signUp";

import SignUpUI from "./signUp.presenter";
import { CREATE_USER } from "./signUp.queries";

export default function SignUp() {
  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSignUp = async (data) => {
    if (!data.email || !data.password || !data.nickname || !data.phone) return;
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email: String(data.email),
            password: String(data.password),
            nickName: String(data.nickname),
            phone: String(data.phone),
            profileImg: "d",
          },
        },
      });
      alert("가입완료");
    } catch (error) {
      console.log(error);
    }
  };
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
