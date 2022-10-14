import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import MediaQueryMobile from "../../../../commons/mediaQuery/mediaQueryStandardMobile";
import MediaQueryPc from "../../../../commons/mediaQuery/mediaQueryStandardPc";
import { FETCH_BOARDS } from "../list/boardList.queries";
import BoardDetailUI from "./boardDetail.presenter";
import {
  ADD_INTEREST_LIST,
  ADOPT_RUNNER,
  APPLY_RUNNER,
  DELETE_BOARD,
  FETCH_BOARD,
  FETCH_INTEREST_BOARDS,
  FETCH_LOGIN_USER,
  FETCH_RUNNER_BY_BOARD,
} from "./boardDetail.queries";
import { Modal } from "antd";
import MediaQueryUltra from "../../../../commons/mediaQuery/mediaQueryStandardUltra";
import {
  IMutation,
  IMutationAdoptRunnerArgs,
  IQuery,
  IQueryFetchBoardArgs,
  IQueryFetchInterestBoardsArgs,
  IQueryFetchRunnerByBoardArgs,
} from "../../../../commons/types/generated/types";

export default function BoardDetail() {
  const router = useRouter();

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.id) },
    }
  );
  const { data: runner } = useQuery<
    Pick<IQuery, "fetchRunnerByBoard">,
    IQueryFetchRunnerByBoardArgs
  >(FETCH_RUNNER_BY_BOARD, {
    variables: { boardId: String(router.query.id) },
  });

  // mediaQuery
  const isMobile = MediaQueryMobile();
  const isPc = MediaQueryPc();
  const isUltra = MediaQueryUltra();

  // LiveChat 모달
  const [showChatModal, setShowChatModal] = useState(false);
  const chatOpenCloseModal = () => {
    if (runner?.fetchRunnerByBoard?.length === 0) {
      Modal.warning({
        title: "Warning",
        content: "아직 runner 신청 내역이 없습니다.",
      });
      return;
    }
    if (
      login?.fetchLoginUser?.id !== data?.fetchBoard?.user?.id &&
      login?.fetchLoginUser?.id !== adoptedRunner[0]?.user?.id
    ) {
      Modal.warning({
        title: "Warning",
        content: "작성자와 채택된 runner만이 채팅이 가능합니다.",
      });
      return;
    }
    setShowChatModal((prev) => !prev);
  };

  // 게시물 수정, 삭제 모달
  const [showBoardModal, setShowBoardModal] = useState(false);
  const boardOpenCloseModal = () => {
    setShowBoardModal((prev) => !prev);
  };

  // 페이지 이동 함수
  const onClickMoveToProductEdit = () => {
    if (data?.fetchBoard?.user?.id !== login?.fetchLoginUser?.id) {
      Modal.warning({
        title: "Warning",
        content: "권한이 없습니다.",
      });
      return;
    }
    router.push(`/board/${router.query.id}/edit`);
  };

  // 상품 삭제
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const { data: login } = useQuery(FETCH_LOGIN_USER);
  const onClickDelete = async () => {
    try {
      if (data?.fetchBoard?.user?.id !== login?.fetchLoginUser?.id) {
        Modal.warning({
          title: "Warning",
          content: "권한이 없습니다.",
        });
        return;
      }
      await deleteBoard({
        variables: {
          boardId: router.query.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARDS,
            variables: { dateType: "최신순" },
          },
        ],
      });
      Modal.success({
        title: "Success",
        content: "게시물이 삭제되었습니다.",
      });
      router.push("/board");
    } catch (error) {
      // if (error instanceof Error)
      // console.log(error.message);
    }
  };

  // runner 신청
  const appliedRunner = runner?.fetchRunnerByBoard.filter(
    (el) => el?.user?.id === login?.fetchLoginUser?.id
  );

  const [applyRunner] = useMutation(APPLY_RUNNER);
  const onClickApply = async () => {
    if (data?.fetchBoard?.user?.id === login.fetchLoginUser.id) {
      Modal.warning({
        title: "Warning",
        content: "본인이 작성한 게시글에는 runner 신청이 제한됩니다.",
      });
      return;
    }
    if (appliedRunner?.length === 1) {
      Modal.warning({
        title: "Warning",
        content: "이미 신청한 게시물입니다.",
      });
      return;
    }
    try {
      const result = await applyRunner({
        variables: { boardId: router.query.id },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId: router.query.id },
          },
          {
            query: FETCH_RUNNER_BY_BOARD,
            variables: { boardId: router.query.id },
          },
        ],
      });
      Modal.success({
        title: "Success",
        content: "runner 신청이 완료되었습니다.",
      });
    } catch (error) {
      // if (error instanceof Error)
      // alert(error.message);
    }
  };

  // runner 채택
  const adoptedRunner: any = runner?.fetchRunnerByBoard?.filter(
    (el) => el?.isChecked === true
  );

  const [adoptRunner] = useMutation<
    Pick<IMutation, "adoptRunner">,
    IMutationAdoptRunnerArgs
  >(ADOPT_RUNNER);
  const onClickAdopt = (id: string) => async () => {
    if (data?.fetchBoard?.user?.id !== login.fetchLoginUser.id) {
      Modal.warning({
        title: "Warning",
        content: "작성자 외에는 runner 채택이 제한됩니다.",
      });
      return;
    }
    if (adoptedRunner?.length === 1) {
      Modal.warning({
        title: "Warning",
        content: "이미 채택된 runner가 존재합니다.",
      });
      return;
    }

    try {
      const result = await adoptRunner({
        variables: {
          userId: id,
          boardId: String(router.query.id),
        },
      });
      Modal.success({
        title: "Success",
        content: "runner 채택이 완료되었습니다.",
      });
    } catch (error) {
      // if (error instanceof Error)
      // alert(error.message);
    }
  };

  // 찜하기
  const [addInterestList] = useMutation(ADD_INTEREST_LIST);
  const { data: interested } = useQuery<
    Pick<IQuery, "fetchInterestBoards">,
    IQueryFetchInterestBoardsArgs
  >(FETCH_INTEREST_BOARDS);
  const interestedBoard = interested?.fetchInterestBoards.filter(
    (el) => el.board.id === router.query.id
  );

  const onClickAddInterestList = async () => {
    try {
      if (data?.fetchBoard?.user?.id === login.fetchLoginUser.id) {
        Modal.warning({
          title: "Warning",
          content: "본인이 작성한 게시글에는 찜 기능이 제한됩니다.",
        });
        return;
      }

      const result = await addInterestList({
        variables: { boardId: router.query.id },
        refetchQueries: [
          {
            query: FETCH_INTEREST_BOARDS,
          },
          {
            query: FETCH_BOARDS,
          },
        ],
      });
      if (result.data.addInterestList) {
        Modal.success({
          title: "Success",
          content: "찜 목록에 담았습니다.",
        });
      } else {
        Modal.info({
          title: "Info",
          content: "찜 목록에서 해제되었습니다.",
        });
      }
    } catch (error) {
      // if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <BoardDetailUI
      data={data}
      login={login}
      runner={runner}
      adoptedRunner={adoptedRunner}
      router={router}
      showChatModal={showChatModal}
      showBoardModal={showBoardModal}
      chatOpenCloseModal={chatOpenCloseModal}
      boardOpenCloseModal={boardOpenCloseModal}
      isMobile={isMobile}
      isPc={isPc}
      isUltra={isUltra}
      onClickMoveToProductEdit={onClickMoveToProductEdit}
      onClickDelete={onClickDelete}
      onClickApply={onClickApply}
      onClickAdopt={onClickAdopt}
      onClickAddInterestList={onClickAddInterestList}
      interestedBoard={interestedBoard}
    />
  );
}
