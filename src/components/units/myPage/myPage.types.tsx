import {
  FieldValues,
  FormState,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IEditAccountProps {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  onClickEdit: SubmitHandler<FieldValues>;
  onClickCancel: () => void;
  fileUrls: string[];
  onChangeFileUrls: (arg0: string) => void;
}
