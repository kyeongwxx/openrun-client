import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { Modal, Rate } from "antd";

import {
  IMutation,
  IMutationCreateRatingArgs,
  IQuery,
  IQueryFetchWriteBoardsArgs,
} from "../../../../commons/types/generated/types";

import MypageWrittenBoardsUI from "./writtenBoard.presenter";
import {
  COMPLETE_BUSINESS,
  CREATE_RATING,
  FETCH_WRITE_BOARDS,
} from "./writtenBoard.queries";

export default function MypageWrittenBoards() {
  const router = useRouter();
  const [userRate, setUserRate] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchWriteBoards">,
    IQueryFetchWriteBoardsArgs
  >(FETCH_WRITE_BOARDS);
  const [createRating] = useMutation<
    Pick<IMutation, "createRating">,
    IMutationCreateRatingArgs
  >(CREATE_RATING);
  const [completeBusiness] = useMutation(COMPLETE_BUSINESS);

  const onClickMoveToDetail = (boardId: string) => () => {
    router.push(`/board/${boardId}`);
  };
  const onClickTop = () => {
    scrollRef.current?.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  const onFetchMore = () => {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data?.fetchWriteBoards.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchWriteBoards)
          return { fetchWriteBoards: [...prev.fetchWriteBoards] };
        return {
          fetchWriteBoards: [
            ...prev.fetchWriteBoards,
            ...fetchMoreResult?.fetchWriteBoards,
          ],
        };
      },
    });
  };
  console.log(data);

  const onClickCompleteModal = (nickName: string, boardId: string) => () => {
    Modal.success({
      title: `${nickName}님 러너 평가`,
      content: <Rate onChange={setUserRate} />,
      onOk: async () => {
        console.log("dd");
        try {
          const rateResult = await createRating({
            variables: {
              boardId,
              rate: userRate,
            },
          });
          const completeResult = await completeBusiness({
            variables: {
              boardId,
            },
            refetchQueries: [{ query: FETCH_WRITE_BOARDS }],
          });
          console.log(rateResult);
          console.log(completeResult);
        } catch (error) {
          console.log(error);
        }
      },
    });
  };

  return (
    <MypageWrittenBoardsUI
      onFetchMore={onFetchMore}
      data={data?.fetchWriteBoards}
      onClickMoveToDetail={onClickMoveToDetail}
      onClickTop={onClickTop}
      scrollRef={scrollRef}
      onClickCompleteModal={onClickCompleteModal}
    />
  );
}
