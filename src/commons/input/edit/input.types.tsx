import { FieldValues, UseFormRegister } from "react-hook-form";

export interface IEditInputProps {
  placeholder: string;
  color: string;
  width: string;
  name: string;
  type: string;
  defaultValue?: string;

  register: UseFormRegister<FieldValues>;
}
