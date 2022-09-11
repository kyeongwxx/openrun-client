import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import {
  IMutation,
  IMutationUpdateLoginUserArgs,
} from "../../../../commons/types/generated/types";
import { userInfoValue } from "../../../commons/store";
import EditAccountUI from "./editAccount.presenter";
import { UPDATE_LOGIN_USER } from "./editAccount.queries";

export default function EditAccount() {
  const [updateLoginUser] = useMutation<
    Pick<IMutation, "updateLoginUser">,
    IMutationUpdateLoginUserArgs
  >(UPDATE_LOGIN_USER);
  const { register, handleSubmit, getValues, formState } = useForm({
    // resolver: yupResolver(schema),
    mode: "onChange",
  });
  const [userInfo, setUserInfo] = useRecoilState(userInfoValue);
  const onClickEdit = async (data) => {
    // if (getValues("email")) updateUserInput.email = email;
    try {
      const result = await updateLoginUser({
        variables: {
          updateUserInput: {
            email: getValues("email"),
            password: getValues("password"),
            nickName: getValues("nickname"),
            phone: getValues("phone"),
          },
        },
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
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
