import { MouseEventHandler, RefObject } from "react";
import {
  FieldValues,
  FormState,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import {
  IBoard,
  IPaymentHistory,
  IRunner,
} from "../../../commons/types/generated/types";

export interface IEditAccountProps {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  onClickEdit: SubmitHandler<FieldValues>;
  onClickCancel: () => void;
  fileUrls: string[];
  onChangeFileUrls: (fileUrl: string, index: number) => void;
}

export interface IDealListProps {
  onFetchMore: () => void;

  onClickTop: () => void;
  scrollRef: RefObject<HTMLDivElement>;
  data?: IPaymentHistory[];
}

export interface IWrittenBoardsProps {
  onFetchMore: () => void;
  onClickMoveToDetail: (arg: string) => MouseEventHandler<HTMLDivElement>;
  onClickTop: () => void;
  scrollRef: RefObject<HTMLDivElement>;
  data?: IBoard[];
  isModalOpen: boolean;
  onClickCompleteModal: (boardId: string) => () => void;
  showModal: (boardId: string) => () => void;
  onClickSubmitReport: () => void;
}

export interface IMainProps {
  chatRoom?: any;
  sellerData?: IBoard[];
  runnerData?: IRunner[];
  onFetchMore: () => void;
  onFetchMoreRunner: () => void;
  onClickMoveToBoardDetail: (arg: string) => MouseEventHandler<HTMLDivElement>;
}
