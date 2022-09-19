import * as yup from "yup";

export const schema = yup.object({
  title: yup.string().required("행사명을 입력해주세요."),
  price: yup
    .number()
    .required("대행 가격을 입력해주세요.")
    .typeError("대행 가격(숫자)을 입력해주세요.")
    .positive("0이상의 숫자를 입력해주세요."),
  address: yup.string().required("주소를 입력(수정)해주세요"),
  addressDetail: yup.string().required("상세 주소를 입력(수정)해주세요."),
  contents: yup.string().required("요청사항을 입력(수정)해주세요."),
  image: yup.array().required("이미지를 업로드(수정)해주세요."),
});
