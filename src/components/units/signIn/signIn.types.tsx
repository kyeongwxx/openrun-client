import {
  DeepPartial,
  FieldValues,
  FormState,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface ISignInProps {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  onClickSignIn: SubmitHandler<FieldValues>;
  onClickGoolge: () => void;
  onClickNaver: () => void;
  onClickKakao: () => void;
}
