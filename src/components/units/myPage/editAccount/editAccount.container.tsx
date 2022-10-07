import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";

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

  const onClickEdit = async (data: any) => {
    if (!data.email || !data.password || !data.nickname || !data.phone) return;
    try {
      const result = await updateLoginUser({
        variables: {
          updateUserInput: {
            email: String(data.email),
            password: String(data.password),
            nickName: String(data.nickname),
            phone: String(data.phone),
            profileImg: fileUrls[0],
          },
        },
      });

      if (result) {
        Modal.success({
          content: "수정 완료되었습니다.",
          onOk: () => {
            location.replace(`/myPage/`);
          },
        });
      }
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
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
        Modal.success({
          content: "수정 완료되었습니다.",
          onOk: () => {
            location.replace(`/myPage/`);
          },
        });
      }
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
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
