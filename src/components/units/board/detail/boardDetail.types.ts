import { NextRouter } from "next/router";
import { IQuery, Maybe } from "../../../../commons/types/generated/types";

export interface BoardDetailUIProps {
  data?: Pick<IQuery, "fetchBoard"> | any;
  runner?: Pick<IQuery, "fetchRunnerByBoard">;
  login: Pick<IQuery, "fetchLoginUser">;
  interestedBoard: any;
  showBoardModal: boolean;
  showChatModal: boolean;
  adoptedRunner: any;
  isPc: any;
  isMobile: any;
  isUltra: any;
  router: NextRouter;
  boardOpenCloseModal: React.MouseEventHandler | undefined;
  chatOpenCloseModal: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onClickMoveToProductEdit: () => void;
  onClickDelete: () => void;
  onClickAddInterestList: () => void;
  onClickApply: () => void;
  onClickAdopt: (
    el: any
  ) => React.MouseEventHandler<HTMLDivElement> | undefined;
}
