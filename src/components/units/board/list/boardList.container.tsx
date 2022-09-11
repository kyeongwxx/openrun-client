import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import BoardListUI from "./boardList.presenter";
import { FETCH_BOARDS, FETCH_EVENTS } from "./boardList.queries";
import _ from "lodash";
import MediaQueryMobile from "../../../../commons/mediaQuery/mediaQueryStandardMobile";
import MediaQueryPc from "../../../../commons/mediaQuery/mediaQueryStandardPc";
import { useRecoilState } from "recoil";
import { selectorValue } from "../../../commons/store";

export default function BoardList() {
  const router = useRouter();

  // mediaQuery
  const isMobile = MediaQueryMobile();
  const isPc = MediaQueryPc();

  // 기본 게시물 정렬
  const [sortValue] = useRecoilState(selectorValue);
  const { data, refetch, fetchMore } = useQuery(FETCH_BOARDS, {
    variables: { dateType: sortValue || "최신순", page: 1 },
  });

  // 더보기  함수
  const onFetchMore = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data?.fetchBoards.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoards)
          return { fetchBoards: [...prev.fetchBoards] };

        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  // search 함수
  // const [keyword, setKeyword] = useState("");

  // const getDebounce = _.debounce((value) => {
  //   refetch({ dateType: "최신순" });
  //   setKeyword(value);
  //   console.log(value);
  // }, 1000);

  // const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
  //   getDebounce(event.target.value);
  // };

  // 페이지 이동 함수
  const onClickMoveToProductDetail = (event: any) => {
    if (!(event.target instanceof HTMLElement)) return;
    router.push(`/board/${event.currentTarget.id}`);
    console.log(event.currentTarget.id);
  };

  return (
    <BoardListUI
      data={data}
      isMobile={isMobile}
      isPc={isPc}
      refetch={refetch}
      onFetchMore={onFetchMore}
      onClickMoveToProductDetail={onClickMoveToProductDetail}
      // keyword={keyword}
      // onChangeSearch={onChangeSearch}
    />
  );
}
