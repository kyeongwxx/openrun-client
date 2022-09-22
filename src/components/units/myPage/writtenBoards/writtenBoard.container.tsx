import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { Modal, Rate } from "antd";
import { GraphQLClient } from "graphql-request";

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
  CREATE_REPORT,
  FETCH_RUNNER,
  FETCH_WRITE_BOARDS,
} from "./writtenBoard.queries";
import { useRecoilState } from "recoil";
import { accessTokenState, modalInputState } from "../../../commons/store";

export default function MypageWrittenBoards() {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [accessToken] = useRecoilState(accessTokenState);
  const [userRate, setUserRate] = useState(0);

  const [runnerInfo, setUserInfo] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenRate, setIsModalOpenRate] = useState(false);

  const [boardId, setBoardId] = useState("");
  const [inputValue, setInputValue] = useRecoilState(modalInputState);

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
    console.log(boardId);
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
      setUserInfo(runnerResult.fetchRunner?.nickName);
    } catch (error) {
      // console.log(error);
    }
  };

  // 신고하기 모달
  const showModal = (boardId: string) => () => {
    setIsModalOpen(true);
    setBoardId(boardId);
  };

  const onClickSubmitReport = async () => {
    try {
      const result = await createReport({
        variables: {
          createReportInput: {
            boardId,
            contents: inputValue,
          },
        },
        refetchQueries: [
          {
            query: FETCH_WRITE_BOARDS,
          },
        ],
      });

      setIsModalOpen(false);
    } catch (error) {
      // console.log(error);
    }
  };

  const showModalRate = (boardId: string) => async () => {
    setIsModalOpenRate(true);
    setBoardId(boardId);
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

      setUserInfo(runnerResult.fetchRunner?.nickName);
    } catch (error) {
      // console.log(error);
    }
  };

  const onClickRate = async () => {
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

      setIsModalOpenRate(false);
    } catch (error) {
      // console.log(error);
    }
  };

  const onClickCancel = () => {
    setIsModalOpen(false);
  };
  const onClickCancelRate = () => {
    setIsModalOpenRate(false);
  };

  return (
    <MypageWrittenBoardsUI
      onFetchMore={onFetchMore}
      data={data?.fetchWriteBoards}
      onClickMoveToDetail={onClickMoveToDetail}
      onClickTop={onClickTop}
      scrollRef={scrollRef}
      onClickCompleteModal={onClickCompleteModal}
      showModal={showModal}
      isModalOpen={isModalOpen}
      onClickSubmitReport={onClickSubmitReport}
      onClickCancel={onClickCancel}
      showModalRate={showModalRate}
      onClickRate={onClickRate}
      runnerInfo={runnerInfo}
      isModalOpenRate={isModalOpenRate}
      onClickCancelRate={onClickCancelRate}
      setUserRate={setUserRate}
    />
  );
}
