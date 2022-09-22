import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";

import {
  IMutation,
  IMutationUpdateLoginUserArgs,
} from "../../../../commons/types/generated/types";
import { schema } from "../../../../commons/yup/updateUserAccount";
import { schemaSocial } from "../../../../commons/yup/updateUserAccountForSocial";
import { userInfoValue } from "../../../commons/store";

import EditAccountUI from "./editAccount.presenter";
import { UPDATE_LOGIN_USER } from "./editAccount.queries";

export default function EditAccount() {
  const [fileUrls, setFileUrls] = useState([""]);
  const [userInfo, setUserInfo] = useRecoilState(userInfoValue);

  const [updateLoginUser] = useMutation<
    Pick<IMutation, "updateLoginUser">,
    IMutationUpdateLoginUserArgs
  >(UPDATE_LOGIN_USER);
  const { register, handleSubmit, getValues, formState } = useForm({
    resolver: yupResolver(
      userInfo?.loginType === "BASIC" ? schema : schemaSocial
    ),
    mode: "onChange",
  });

  useEffect(() => {
    if (userInfo?.profileImg) {
      setFileUrls([userInfo?.profileImg]);
    }
  }, [userInfo?.profileImg]);

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  const onClickEdit = async () => {
    if (!getValues("password")) return;
    try {
      const result = await updateLoginUser({
        variables: {
          updateUserInput: {
            email: getValues("email"),
            password: getValues("password"),
            nickName: getValues("nickname"),
            phone: getValues("phone"),
            profileImg: fileUrls[0],
          },
        },
      });
      if (result) {
        location.replace(`/myPage/`);
      }
    } catch (error) {
      // console.log(error);
    }
  };
  const onClickCancel = () => {
    location.replace(`/myPage/`);
  };

  const onClickEditForSocial = async () => {
    try {
      const result = await updateLoginUser({
        variables: {
          updateUserInput: {
            email: getValues("email"),
            nickName: getValues("nickname"),
            phone: getValues("phone"),
            profileImg: fileUrls[0],
          },
        },
      });
      if (result) {
        // console.log(result);
        location.replace(`/myPage/`);
      }
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <EditAccountUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickEdit={onClickEdit}
      onClickCancel={onClickCancel}
      onChangeFileUrls={onChangeFileUrls}
      onClickEditForSocial={onClickEditForSocial}
      fileUrls={fileUrls}
    />
  );
}
