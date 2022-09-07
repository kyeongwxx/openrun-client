import { useEffect, useState } from "react";
import BoardWriteUI from "./boardWrite.presenter";
import * as yup from "yup";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD } from "./boardWrite.queries";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRecoilState } from "recoil";
import { dayState, selectorValue, timeState } from "../../../commons/store";
import MediaQueryMobile from "../../../../commons/mediaQuery/mediaQueryStandardMobile";
import MediaQueryPc from "../../../../commons/mediaQuery/mediaQueryStandardPc";

const schema = yup.object({
  // name: yup.string().required("상품명을 입력해주세요."),
  // remarks: yup.string(),
  // contents: yup.string().required("상품설명을 입력해주세요."),
  // price: yup
  //   .number()
  //   .typeError("숫자를 입력해주세요.")
  //   .positive("0이상의 숫자를 입력해주세요.")
  //   .required("판매가격을 입력해주세요."),
  // tags: yup
  //   .string()
  //   .matches(/(#[^\s#]+)/g, "'#'으로 입력을 시작해주세요.")
  //   .required("태그를 입력해주세요"),
});

export default function BoardWrite(props) {
  const router = useRouter();

  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // mediaQuery
  const isMobile = MediaQueryMobile();
  const isPc = MediaQueryPc();

  // selector, calendar, timePicker 라이브러리 global state
  const [sortValue, setSortValue] = useRecoilState(selectorValue);
  const [dayValue, setDayValue] = useRecoilState(dayState);
  const [timeValue, setTimeValue] = useRecoilState(timeState);

  console.log(`sortValue : ${sortValue}`);
  console.log(`dayValue : ${String(dayValue).slice(0, 15)}`);
  console.log(`timeValue : ${timeValue.$d}`);

  // 주소 state
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const onChangeAddressDetail = (event) => {
    setAddressDetail(event.target.value);
  };

  // 주소 modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onCompleteAddressSearch = (data: any) => {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsModalOpen(false);
  };
  const onClickAddressSearch = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // 웹 에디터 onchange
  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  // 파일 업로드
  const [fileUrls, setFileUrls] = useState(["", ""]);
  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
    console.log(fileUrls);
  };

  useEffect(() => {
    if (props.data?.fetchBoard.images?.length) {
      setFileUrls([...props.data?.fetchBoard.images]);
    }
  }, [props.data]);

  // 게시물 등록 함수
  const [createBoard] = useMutation(CREATE_BOARD);
  const onClickCreate = async (data) => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            title: String(data.title),
            contents: String(data.contents),
            price: Number(data.price),
            eventDay: String(dayValue).slice(0, 15),
            eventTime: String(timeValue.$d).slice(16, 21),
            category: String(sortValue),
            location: {
              zipcode: zipcode,
              address: address,
              addressDetail: addressDetail,
            },
            image: [...fileUrls],
          },
        },
      });
      console.log(result);
      console.log(data);
      alert("게시물 등록 성공");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <BoardWriteUI
      isMobile={isMobile}
      isPc={isPc}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onChangeContents={onChangeContents}
      onClickCreate={onClickCreate}
      address={address}
      zipcode={zipcode}
      onChangeAddressDetail={onChangeAddressDetail}
      isModalOpen={isModalOpen}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onClickAddressSearch={onClickAddressSearch}
      handleOk={handleOk}
      handleCancel={handleCancel}
      onChangeFileUrls={onChangeFileUrls}
      fileUrls={fileUrls}
      data={props.data}
    />
  );
}
