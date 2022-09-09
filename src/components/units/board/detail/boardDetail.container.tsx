import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MediaQueryMobile from "../../../../commons/mediaQuery/mediaQueryStandardMobile";
import MediaQueryPc from "../../../../commons/mediaQuery/mediaQueryStandardPc";
import { FETCH_BOARDS } from "../list/boardList.queries";
import BoardDetailUI from "./boardDetail.presenter";
import {
  DELETE_BOARD,
  FETCH_BOARD,
  FETCH_LOGIN_USER,
} from "./boardDetail.queries";

export default function BoardDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.id },
  });
  console.log(data);

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

  return (
    <BoardDetailUI
      data={data}
      router={router}
      isMobile={isMobile}
      isPc={isPc}
      onClickMoveToProductEdit={onClickMoveToProductEdit}
      onClickDelete={onClickDelete}
    />
  );
}
