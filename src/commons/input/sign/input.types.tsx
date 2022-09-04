import { FieldValues, UseFormRegister } from "react-hook-form";

export interface ISignInputProps {
  placeholder?: string;
  color?: string;
  width?: string;
  name?: string;
  type: string;
  register: UseFormRegister<FieldValues>;
}
