import EventInfoDetailUI from "./eventInfoDetail.presenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_EVENT } from "./eventInfoDetail.queries";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchEventArgs,
} from "../../../../commons/types/generated/types";

export default function EventInfoDetail() {
  const router = useRouter();

  const { data } = useQuery<Pick<IQuery, "fetchEvent">, IQueryFetchEventArgs>(
    FETCH_EVENT,
    {
      variables: { eventId: String(router.query.id) },
    }
  );

  const { data: boardsData } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, {
    variables: {
      dateType: "최신순",
    },
  });
  console.log(boardsData);

  const onClickMoveToBoardDetail = (event: any) => {
    router.push(`/board/${event}`);
  };

  return (
    <EventInfoDetailUI
      data={data}
      boardsData={boardsData}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
    />
  );
}
