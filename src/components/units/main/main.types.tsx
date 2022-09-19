import { IBoard, IUser } from "../../../commons/types/generated/types";

export interface IMainProps {
  color: boolean[];
  category: string[];
  onClickCategory: (arg: string) => void;
  onMouse: (arg: number) => void;
  isHover: string[];
  onMouseTrue: (arg: number) => void;
  MouseLeaveDate: () => void;
  onClickMoveToDetail: (arg: string) => void;
  onClickDate: (arg: string, arg2: number) => void;
  eventIfo: any;
  data?: IUser[];
  bestBoards: IBoard[];
}

//   onClickDate={onClickDate}
//
//
//
//       data={data?.fetchBestOfUser}
//       bestBoards={bestBoards?.fetchBestOfBoards}
//
//
//       eventIfo={eventIfo?.fetchEventsByDate}
