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

export default function BoardDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.id },
  });
  // console.log(data);
  const { data: runner } = useQuery(FETCH_RUNNER_BY_BOARD, {
    variables: { boardId: router.query.id },
  });
  // console.log(runner);

  // LiveChat 모달
  const [showModal, setShowModal] = useState(false);
  const openCloseModal = () => {
    setShowModal((prev) => !prev);
  };

  // mediaQuery
  const isMobile = MediaQueryMobile();
  const isPc = MediaQueryPc();

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
  const onClickDelete = async (event: any) => {
    try {
      if (data?.fetchBoard?.user?.id !== login?.fetchLoginUser?.id) {
        Modal.warning({
          title: "Warning",
          content: "권한이 없습니다.",
        });
        return;
      }
      deleteBoard({
        variables: {
          boardId: router.query.id,
        },
        refetchQueries: [{ query: FETCH_BOARDS }],
      });
      Modal.success({
        title: "Success",
        content: "게시물이 삭제되었습니다.",
      });
      router.push("/board");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  // runner 신청
  const [applyRunner] = useMutation(APPLY_RUNNER);
  const onClickApply = async () => {
    if (data.fetchBoard.user.id === login.fetchLoginUser.id) {
      Modal.warning({
        title: "Warning",
        content: "본인이 작성한 게시글에는 신청이 제한됩니다.",
      });
      return;
    }

    try {
      const result = await applyRunner({
        variables: { boardId: router.query.id },
      });
      Modal.success({
        title: "Success",
        content: "runner 신청이 완료되었습니다.",
      });
    } catch (error: any) {
      alert(error.message);
    }
  };

  // runner 채택
  const [adoptRunner] = useMutation(ADOPT_RUNNER);
  console.log(runner?.fetchRunnerByBoard);
  const onClickAdopt = (id: string) => async () => {
    try {
      const result = await adoptRunner({
        variables: {
          userId: id,
          boardId: router.query.id,
        },
      });
      console.log(result);
      Modal.success({
        title: "Success",
        content: "runner 채택이 완료되었습니다.",
      });
    } catch (error: any) {
      alert(error.message);
    }
  };
  // 찜하기
  const [addInterestList] = useMutation(ADD_INTEREST_LIST);
  const { data: interested } = useQuery(FETCH_INTEREST_BOARDS);
  const interestedBoard = interested?.fetchInterestBoards.filter(
    (el: any) => el.board.id === router.query.id
  );

  const onClickAddInterestList = async () => {
    try {
      const result = await addInterestList({
        variables: { boardId: router.query.id },
        refetchQueries: [
          {
            query: FETCH_INTEREST_BOARDS,
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
    } catch (error: any) {
      alert(error.message);
    }
  };
  // console.log(interestedBoard[0].board.id);

  return (
    <BoardDetailUI
      data={data}
      runner={runner}
      router={router}
      showModal={showModal}
      openCloseModal={openCloseModal}
      isMobile={isMobile}
      isPc={isPc}
      onClickMoveToProductEdit={onClickMoveToProductEdit}
      onClickDelete={onClickDelete}
      onClickApply={onClickApply}
      onClickAdopt={onClickAdopt}
      onClickAddInterestList={onClickAddInterestList}
      interestedBoard={interestedBoard}
    />
  );
}
