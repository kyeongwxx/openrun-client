import { IEvent } from "../../../../commons/types/generated/types";

export interface IEventInfoDetailUI {
  data?: IEventInfoDetailData;
  boardsData?: any;
  onClickMoveToBoardDetail?: (event: any) => void;
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

  //TODO : ANY 없애기
  boardsData?: any;
}
