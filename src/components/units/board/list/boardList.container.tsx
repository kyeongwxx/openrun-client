import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import BoardListUI from "./boardList.presenter";
import { FETCH_BOARDS, FETCH_EVENTS } from "./boardList.queries";
import _ from "lodash";

export default function BoardList() {
  const router = useRouter();
  const { data, refetch, fetchMore } = useQuery(FETCH_BOARDS, {
    variables: { dateType: "최신순", page: 1 },
  });

  console.log(data);

  // infinite-scroll 함수
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
  const [keyword, setKeyword] = useState("");
  const { data: events, refetch: eventsRefetch } = useQuery(FETCH_EVENTS);
  console.log(eventsRefetch);

  const getDebounce = _.debounce((value) => {
    eventsRefetch({ search: value });
    setKeyword(value);
    console.log(value);
  }, 1000);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  // 페이지 이동 함수
  const onClickMoveToProductDetail = (event: any) => {
    if (!(event.target instanceof HTMLElement)) return;
    router.push(`/board/${event.currentTarget.id}`);
    console.log(event.currentTarget.id);
  };

  return (
    <BoardListUI
      data={data}
      refetch={refetch}
      keyword={keyword}
      onFetchMore={onFetchMore}
      onClickMoveToProductDetail={onClickMoveToProductDetail}
      onChangeSearch={onChangeSearch}
    />
  );
}
