import { BaseSyntheticEvent } from "react";
import { IBoard, IEvent } from "../../../../commons/types/generated/types";

export interface IEventInfoDetailUI {
  data?: IEventInfoDetailData;
  onClickMoveToBoardDetail?: (
    event:
      | BaseSyntheticEvent<
          MouseEvent,
          EventTarget & HTMLDivElement,
          EventTarget
        >
      | string
  ) => void;
  boardsData?: IBoardsData;
}

export interface IBoardsData {
  fetchEvent?: IEvent;
  fetchBoards?: IBoard[];
}

export interface IEventInfoDetailData {
  fetchEvent?: IEvent;
  brand?: string;
  contentsImage?: object[];
  createdAt?: string;
  id?: string;
  image?: string;
  location?: string;
  period?: string;
  title?: string;
  __typename?: string;
}
