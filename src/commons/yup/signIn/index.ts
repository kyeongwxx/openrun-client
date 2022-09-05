import * as yup from "yup";
export const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 아닙니다.")
    .required("이메일은 필수사항입니다."),
  password: yup
    .string()
    .min(1, "8자 이상 입력하세요")

    .required("비밀번호는 필수사항입니다.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "영문 대소문자, 숫자, 특수문자를 포함해야 합니다."
    ),
  passwordCheck: yup
    .string()
    .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다."),
  phone: yup.string().required("번호는 필수사항입니다."),
  nickname: yup.string().required("닉네임은 필수사항입니다."),
});
