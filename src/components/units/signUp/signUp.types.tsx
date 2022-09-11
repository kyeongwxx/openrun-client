import { RadioChangeEvent } from "antd";
import {
  FieldValues,
  FormState,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface ISignUpProps {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  onClickSignUp: SubmitHandler<FieldValues>;
  onClickCheckCertify: (data: any) => Promise<void>;
  onClickPhoneCertify: (data: any) => Promise<void>;
  isOpen: boolean;
}
