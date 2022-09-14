import * as yup from "yup";

export const schema = yup.object({
  // category: yup.string().required("카테고리를 선택해주세요."),
  title: yup.string().required("행사명을 입력해주세요."),
  price: yup
    .number()
    .required("대행 가격을 입력해주세요.")
    .typeError("대행 가격(숫자)를 입력해주세요.")
    .positive("0이상의 숫자를 입력해주세요."),
  // address: yup.string().required("주소를 입력해주세요"),
  // addressDetail: yup.string().required("상세 주소를 입력해주세요."),
  contents: yup.string().required("요청사항을 입력해주세요."),
});
