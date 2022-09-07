import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import EditAccountUI from "./editAccount.presenter";

export default function EditAccount() {
  const { register, handleSubmit, getValues, formState } = useForm({
    // resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onClickEdit = () => {};
  const onClickCancel = () => {};
  return (
    <EditAccountUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickEdit={onClickEdit}
      onClickCancel={onClickCancel}
    />
  );
}
