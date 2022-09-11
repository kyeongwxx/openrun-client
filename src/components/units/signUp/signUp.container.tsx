import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import {
  IMutation,
  IMutationCheckTokenByPhoneArgs,
  IMutationCreateUserArgs,
  IMutationSendTokenToPhoneArgs,
} from "../../../commons/types/generated/types";
import { schema } from "../../../commons/yup/signUp";

import SignUpUI from "./signUp.presenter";
import {
  CHECK_TOKEN_BY_PHONE,
  CREATE_USER,
  SEND_TOKEN_TO_PHONE,
} from "./signUp.queries";

export default function SignUp() {
  const [isOpen, setIsOpen] = useState(false);
  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const [sendTokenToPhone] = useMutation<
    Pick<IMutation, "sendTokenToPhone">,
    IMutationSendTokenToPhoneArgs
  >(SEND_TOKEN_TO_PHONE);

  const [checkTokenByPhone] = useMutation<
    Pick<IMutation, "checkTokenByPhone">,
    IMutationCheckTokenByPhoneArgs
  >(CHECK_TOKEN_BY_PHONE);

  const { register, handleSubmit, formState, getValues } = useForm({
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
          },
        },
      });
      alert("가입완료");
    } catch (error) {
      console.log(error);
    }
  };
  const onClickPhoneCertify = async () => {
    try {
      const result = await sendTokenToPhone({
        variables: {
          phone: getValues("phone"),
        },
      });
      setIsOpen(true);
    } catch (error) {
      console.log(error);
    }
  };
  const onClickCheckCertify = async () => {
    try {
      const result = await checkTokenByPhone({
        variables: {
          phone: getValues("phone"),
          token: getValues("token"),
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SignUpUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSignUp={onClickSignUp}
      onClickCheckCertify={onClickCheckCertify}
      onClickPhoneCertify={onClickPhoneCertify}
      isOpen={isOpen}
    />
  );
}
