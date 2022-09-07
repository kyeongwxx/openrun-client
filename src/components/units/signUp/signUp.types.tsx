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
  onClickSendCertificationNum: () => void;
  onClickPhoneCertify: () => void;
  isOpen: boolean;
}
