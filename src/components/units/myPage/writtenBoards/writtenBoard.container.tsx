import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useRef, useState } from "react";
import { Modal, Rate } from "antd";
import { GraphQLClient } from "graphql-request";

import {
  IMutation,
  IMutationCreateRatingArgs,
  IQuery,
  IQueryFetchRunnerArgs,
  IQueryFetchWriteBoardsArgs,
} from "../../../../commons/types/generated/types";

import MypageWrittenBoardsUI from "./writtenBoard.presenter";
import {
  COMPLETE_BUSINESS,
  CREATE_RATING,
  CREATE_REPORT,
  FETCH_RUNNER,
  FETCH_WRITE_BOARDS,
} from "./writtenBoard.queries";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import ReportInput from "../../../../commons/input/report";

export default function MypageWrittenBoards() {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [accessToken] = useRecoilState(accessTokenState);
  const [userRate, setUserRate] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchWriteBoards">,
    IQueryFetchWriteBoardsArgs
  >(FETCH_WRITE_BOARDS);

  const [createRating] = useMutation<
    Pick<IMutation, "createRating">,
    IMutationCreateRatingArgs
  >(CREATE_RATING);
  const [completeBusiness] = useMutation(COMPLETE_BUSINESS);

  const [createReport] = useMutation(CREATE_REPORT);

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

  // 거래 완료 모달
  const onClickCompleteModal = (boardId: string) => async () => {
    try {
      const graphQlClient = new GraphQLClient(
        "https://openrunbackend.shop/graphql",
        {
          credentials: "include",
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      const runnerResult = await graphQlClient.request(FETCH_RUNNER, {
        boardId: boardId,
      });
      Modal.success({
        title: `${runnerResult.fetchRunner?.nickName}님 러너 평가`,
        content: <Rate onChange={setUserRate} />,
        onOk: async () => {
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
          } catch (error) {
            console.log(error);
          }
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  // 신고하기 모달
  const onClickReportModal = (boardId: string) => () => {
    console.log(boardId);
    Modal.warning({
      title: "신고하기",
      content: (
        <ReportInput onChange={(event) => setInputValue(event.target.value)} />
      ),
      onOk: async () => {
        console.log(inputValue);
        try {
          const result = await createReport({
            variables: {
              createReportInput: {
                boardId,
                contents: inputValue,
              },
            },
          });
          console.log(result);
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
      onClickReportModal={onClickReportModal}
    />
  );
}
