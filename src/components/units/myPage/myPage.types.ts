import { Dispatch, MouseEventHandler, RefObject, SetStateAction } from "react";
import {
  FieldValues,
  FormState,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import {
  IBoard,
  IChatRoom,
  IInterest,
  IPayment,
  IPaymentHistory,
  IRunner,
} from "../../../commons/types/generated/types";

export interface IEditAccountProps {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  onClickEdit: SubmitHandler<FieldValues>;
  onClickEditForSocial: SubmitHandler<FieldValues>;
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
  showModalRate: (boardId: string) => () => void;
  onClickSubmitReport: () => void;
  onClickCancel: () => void;
  onClickCancelRate: () => void;
  onClickRate: () => void;
  runnerInfo: string;
  isModalOpenRate: boolean;
  setUserRate: Dispatch<SetStateAction<number>>;
}

export interface IMainProps {
  sellerData?: IBoard[];
  runnerData?: IRunner[];
  chatRoom?: IChatRoom[];

  onFetchMore: () => void;
  onFetchMoreRunner: () => void;
  onClickMoveToBoardDetail: (arg: string) => MouseEventHandler<HTMLDivElement>;
}

export interface IFavoriteProps {
  data?: IInterest[];
  onClickMoveToBoardDetail: (arg: string) => () => void;
  onFetchMore: () => void;
  onClickTop: () => void;
  scrollRef: RefObject<HTMLDivElement>;
}

export interface IPaymentProps {
  onFetchMore: () => void;
  onClickChargePoint: () => void;
  onClickRefund: (impUid: string, amount: number) => () => Promise<void>;
  onClickPayment: () => Promise<void>;
  onClickOpenRefund: () => void;
  chargeBtnState: boolean;
  data?: IPayment[];
  isRefund: string;
  refundState: boolean;
}
