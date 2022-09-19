import EventInfoDetailUI from "./eventInfoDetail.presenter";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { FETCH_BOARD, FETCH_EVENT } from "./eventInfoDetail.queries";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import {
  IQuery,
  IQueryFetchEventArgs,
} from "../../../../commons/types/generated/types";
import { UPLOAD_FILE } from "../../../../commons/uploads/Uploads.queries";
import { modalGlobalConfig } from "antd/lib/modal/confirm";
import modal from "antd/lib/modal";

export default function EventInfoDetail() {
  const router = useRouter();
  const PAGE_SIZE = 10;

  const { data } = useQuery<Pick<IQuery, "fetchEvent">, IQueryFetchEventArgs>(
    FETCH_EVENT,
    {
      variables: { eventId: String(router.query.id) },
    }
  );

  // const ImageUpload=()=>{
  //   const [uploadFile]=useMutation(UPLOAD_FILE)
  //   const onchangeFile=async(e:ChangeEvent<HTMLInputElement>)=>{
  //     const ImageFile=e.target,files?.[0]
  //     try{
  //       await uploadFile({variables:{file:ImageFile}})
  //       console.log(result.data?.uploadFile.url)
  //     }catch(error.message){
  //     Modal.error({content:"파일이 "})
  //     }
  //   }
  //   return <input type="file" onChange={onChangeFile} />
  // }

  // )
  // const { data, fetchMore } = useQuery(FETCH_BOARD, {
  //   variables: { pageSize: PAGE_SIZE, page: 1 },
  // });

  // const ToloadFunc = () => {
  //   if (!data) return;

  //   fetchMore({
  //     variables: {
  //       page: Math.ceil(data.fetchBoard.length / 10) + 1,
  //       pageSize: PAGE_SIZE,
  //     },
  //     updateQuery: (prev, { fetchMoreResult }) => {
  //       if (!fetchMoreResult?.fetchBoard.category)
  //         return {
  //           fetchBoard: [...prev.fetchBoard.category],
  //         };
  //       return {
  //         fetchBoard: [...prev.fetchBoard, ...fetchMoreResult.fetchBoard],
  //       };
  //     },
  //   });
  // };

  const onClickBoardDetail = (event) => {
    router.push(`/board/${event.currentTarget.id}`);
  };

  return (
    <EventInfoDetailUI
      data={data}
      // ToloadFunc={ToloadFunc}
      onClickBoardDetail={onClickBoardDetail}
    />
  );
}
