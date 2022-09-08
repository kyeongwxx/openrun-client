import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MediaQueryMobile from "../../../../commons/mediaQuery/mediaQueryStandardMobile";
import MediaQueryPc from "../../../../commons/mediaQuery/mediaQueryStandardPc";
import BoardDetailUI from "./boardDetail.presenter";
import { FETCH_BOARD } from "./boardDetail.queries";

export default function BoardDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.id },
  });
  console.log(data);

  // mediaQuery
  const isMobile = MediaQueryMobile();
  const isPc = MediaQueryPc();

  return <BoardDetailUI data={data} isMobile={isMobile} isPc={isPc} />;
}
