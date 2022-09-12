import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import MediaQueryMobile from "../../../../commons/mediaQuery/mediaQueryStandardMobile";
import MediaQueryPc from "../../../../commons/mediaQuery/mediaQueryStandardPc";
import { FETCH_BOARDS } from "../list/boardList.queries";
import BoardDetailUI from "./boardDetail.presenter";
import {
  ADOPT_RUNNER,
  APPLY_RUNNER,
  DELETE_BOARD,
  FETCH_BOARD,
  FETCH_LOGIN_USER,
  FETCH_RUNNER_BY_BOARD,
} from "./boardDetail.queries";

export default function BoardDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.id },
  });
  console.log(data);
  const { data: runner } = useQuery(FETCH_RUNNER_BY_BOARD, {
    variables: { boardId: router.query.id },
  });
  console.log(runner);
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
    router.push(`/board/${router.query.id}/edit`);
  };

  // 상품 삭제
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const { data: login } = useQuery(FETCH_LOGIN_USER);
  const onClickDelete = async (event: any) => {
    try {
      if (data?.fetchBoard?.user?.id !== login?.fetchLoginUser?.id) {
        alert("권한이 없습니다.");
        return;
      }
      deleteBoard({
        variables: {
          boardId: router.query.id,
        },
        refetchQueries: [{ query: FETCH_BOARDS }],
      });
      alert("상품이 삭제되었습니다.");
      router.push("/board");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  // runner 신청
  const [applyRunner] = useMutation(APPLY_RUNNER);
  const onClickApply = async () => {
    try {
      const result = await applyRunner({
        variables: { boardId: router.query.id },
      });
      alert("runner 신청 성공");
    } catch (error: any) {
      alert(error.message);
    }
  };

  // runner 채택
  const [adoptRunner] = useMutation(ADOPT_RUNNER);
  const onClickAdopt = async () => {
    try {
      const result = await adoptRunner({
        variables: {
          userId: login.fetchLoginUser.id,
          boardId: router.query.id,
        },
      });
      console.log(result);
      alert("runner 채택 성공");
    } catch (error: any) {
      alert(error.message);
    }
  };

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
    />
  );
}
