import { SubmitHandler, useForm } from "react-hook-form";
import SignInUI from "./signIn.presenter";
import { yupResolver } from "@hookform/resolvers/yup";

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    // resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSignIn = () => {};

  return (
    <SignInUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSignIn={onClickSignIn}
    />
  );
}
