import { SubmitHandler, useForm } from "react-hook-form";
import SignInUI from "./signIn.presenter";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@apollo/client";
import { LOGIN } from "./signIn.queries";
import {
  IMutation,
  IMutationLoginArgs,
} from "../../../commons/types/generated/types";
import { schema } from "../../../commons/yup/signIn";

export default function SignIn() {
  const [login] = useMutation<Pick<IMutation, "login">, IMutationLoginArgs>(
    LOGIN
  );
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSignIn = async (data) => {
    if (!data.email || !data.password) return;
    try {
      const result = await login({
        variables: {
          email: String(data.email),
          password: String(data.password),
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SignInUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSignIn={onClickSignIn}
    />
  );
}
