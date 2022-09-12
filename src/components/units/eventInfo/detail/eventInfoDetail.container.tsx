import EventInfoDetailUI from "./eventInfoDetail.presenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_EVENT, FETCH_BOARDS } from "./eventInfoDetail.queries";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";

export default function EventInfoDetail() {
  const router = useRouter();
  const PAGE_SIZE = 10;

  const fetchEvent = useQuery(
    FETCH_EVENT
    //   , {
    //   variables: { eventId: router.query.id },
    // }
  );
  const { data, fetchMore } = useQuery(FETCH_BOARDS, {
    variables: { pageSize: PAGE_SIZE, page: 1 },
  });
  const ToloadFunc = () => {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data.fetchPosts.length / 10) + 1,
        pageSize: PAGE_SIZE,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchBoards)
          return {
            fetchBoards: [...prev.fetchBoards],
          };
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <EventInfoDetailUI
      fetchEvent={fetchEvent}
      data={data}
      ToloadFunc={ToloadFunc}
    />
  );
}
