import EventInfoDetailUI from "./eventInfoDetail.presenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import {
  FETCH_BOARD,
  FETCH_EVENT,
  FETCH_EVENT_BY_DATE,
} from "./eventInfoDetail.queries";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";

export default function EventInfoDetail() {
  const router = useRouter();
  const PAGE_SIZE = 10;

  const fetchEventByDate = useQuery(FETCH_EVENT_BY_DATE, {
    variables: { eventByDateId: router.query.id },
  });
  const fetchBoard = useQuery(FETCH_EVENT, {
    variables: { eventId: router.query.id },
  });
  const { data, fetchMore } = useQuery(FETCH_BOARD, {
    variables: { pageSize: PAGE_SIZE, page: 1 },
  });

  const ToloadFunc = () => {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data.fetchBoard.length / 10) + 1,
        pageSize: PAGE_SIZE,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchBoard.category)
          return {
            fetchBoard: [...prev.fetchBoard.category],
          };
        return {
          fetchBoard: [...prev.fetchBoard, ...fetchMoreResult.fetchBoard],
        };
      },
    });
  };
  const onClickBoardDetail = (event) => {
    router.push(`/board/${event.currentTarget.id}`);
  };

  return (
    <EventInfoDetailUI
      fetchBoard={fetchBoard}
      data={data}
      ToloadFunc={ToloadFunc}
      onClickBoardDetail={onClickBoardDetail}
      fetchEventByDate={fetchEventByDate}
    />
  );
}
