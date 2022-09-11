import { MouseEventHandler } from "react";

export interface IEventInfoDetailUI {
  data?: any;
  eventInfo: any;
  id: string;
  title: string;
  contents: string;
  period: string;
  location: string;
  image: string;
  createdAt: string;
  el: any;
  onClickMoveToPage?: (path: any) => MouseEventHandler<HTMLDivElement>;
  ToloadFunc?: () => void;
}
