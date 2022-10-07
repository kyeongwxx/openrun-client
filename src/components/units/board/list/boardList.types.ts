import { ApolloQueryResult } from "@apollo/client";
import { NextRouter } from "next/router";
import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface BoardListUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  interestedId: Pick<IQuery, "fetchInterestBoardId">;
  isPc: boolean;
  isMobile: boolean;
  isUltra: boolean;
  keyword: any;
  router: NextRouter;
  onClickMoveToAll: () => void;
  onClickMoveToFashion: () => void;
  onClickMoveToAcc: () => void;
  onClickMoveToDigital: () => void;
  onClickMoveToFood: () => void;
  onClickMoveToToy: () => void;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickMoveToProductDetail: (e: any) => void;
  onFetchMore: () => void;
  refetch: (
    variables?:
      | Partial<{
          dateType: string;
          direcion: string;
          search: string;
          page: number;
        }>
      | undefined
  ) => Promise<ApolloQueryResult<any>>;
}
