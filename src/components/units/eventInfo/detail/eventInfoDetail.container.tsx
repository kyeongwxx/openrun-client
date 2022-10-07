import EventInfoDetailUI from "./eventInfoDetail.presenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_EVENT } from "./eventInfoDetail.queries";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchEventArgs,
} from "../../../../commons/types/generated/types";
import { BaseSyntheticEvent } from "react";

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

  const onClickMoveToBoardDetail = (
    event:
      | BaseSyntheticEvent<
          MouseEvent,
          EventTarget & HTMLDivElement,
          EventTarget
        >
      | string
  ) => {
    router.push(`/board/${event}`);
  };

  return (
    <EventInfoDetailUI
      data={data}
      // boardsData={boardsData?.fetchBoards}
      boardsData={boardsData}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
    />
  );
}
