import {
  DeepPartial,
  FieldValues,
  FormState,
  Mode,
  Resolver,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface ISignInProps {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  onClickSignIn: SubmitHandler<FieldValues>;
}

// export interface ISignInProps {
//   register?: string;
//   handleSubmit?: string;
//   formState: string;
//   onClickSignIn?: () => void;
// }
