import * as yup from "yup";
export const schemaSocial = yup.object({
  phone: yup.string().required("번호는 필수사항입니다."),
  nickname: yup.string().required("닉네임은 필수사항입니다."),
});
