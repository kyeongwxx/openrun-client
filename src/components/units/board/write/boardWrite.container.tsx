import { useEffect, useState } from "react";
import BoardWriteUI from "./boardWrite.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_BOARD, UPDATE_BOARD } from "./boardWrite.queries";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRecoilState } from "recoil";
import {
  accessTokenState,
  dayState,
  selectorValue,
  timeState,
} from "../../../commons/store";
import MediaQueryMobile from "../../../../commons/mediaQuery/mediaQueryStandardMobile";
import MediaQueryPc from "../../../../commons/mediaQuery/mediaQueryStandardPc";
import { schema } from "../../../../commons/yup/boardWrite";
import { Modal } from "antd";

export default function BoardWrite(props: any) {
  const router = useRouter();
  const [accessToken] = useRecoilState(accessTokenState);

  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // mediaQuery
  const isMobile = MediaQueryMobile();
  const isPc = MediaQueryPc();

  // selector, calendar, timePicker 라이브러리 global state
  const [sortValue] = useRecoilState(selectorValue);
  const [dayValue] = useRecoilState(dayState);
  const [timeValue] = useRecoilState(timeState);

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
  const onClickCreate = async (data: any) => {
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
      Modal.success({
        title: "Success",
        content: "게시물 등록이 완료되었습니다.",
      });
      router.push(`/board/${result.data.createBoard.id}`);
    } catch (error: any) {
      alert(error.message);
      if (!accessToken) router.push("/signIn");
    }
  };

  // 게시물 수정 함수
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const onClickUpdate = async (data: any) => {
    try {
      const result = await updateBoard({
        variables: {
          updateBoardInput: {
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
          boardId: router.query.id,
        },
      });
      console.log(data);
      Modal.success({
        title: "Success",
        content: "게시물 수정이 완료되었습니다.",
      });
      router.push(`/board/${result.data?.updateBoard.id}`);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  // 페이지 이동 함수
  const onClickMoveToList = () => {
    router.push("/board/");
  };
  const onClickMoveToDetail = () => {
    router.push(`/board/${router.query.id}`);
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
      onClickUpdate={onClickUpdate}
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
      isEdit={props.isEdit}
      data={props.data}
      onClickMoveToList={onClickMoveToList}
      onClickMoveToDetail={onClickMoveToDetail}
    />
  );
}
