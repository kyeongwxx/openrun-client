import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

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
  const [isOpen, setIsOpen] = useState(false);
  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);
  const { register, handleSubmit, formState, getValues } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const value = getValues;
  console.log(value);

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
          },
        },
      });
      alert("가입완료");
    } catch (error) {
      console.log(error);
    }
  };
  const onClickPhoneCertify = () => {};
  const onClickSendCertificationNum = () => {
    setIsOpen(true);
  };
  return (
    <SignUpUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSignUp={onClickSignUp}
      onClickSendCertificationNum={onClickSendCertificationNum}
      onClickPhoneCertify={onClickPhoneCertify}
      isOpen={isOpen}
    />
  );
}
