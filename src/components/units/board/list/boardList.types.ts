import { IQuery } from "../../../../commons/types/generated/types";

export interface BoardListUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  interestedId: Pick<IQuery, "fetchInterestBoardId">;
  isPc: boolean;
  isMobile: boolean;
  isUltra: boolean;
  keyword: any;
  onClickMoveToAll: () => void;
  onClickMoveToFashion: () => void;
  onClickMoveToAcc: () => void;
  onClickMoveToDigital: () => void;
  onClickMoveToFood: () => void;
  onClickMoveToToy: () => void;
  onChangeSearch: () => void;
  onClickMoveToProductDetail: (e: any) => void;
  onFetchMore: () => void;
}
