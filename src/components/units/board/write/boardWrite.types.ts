import { ChangeEvent } from "react";
import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardWrite {
  isEdit?: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IBoardCreateEdit {
  title?: string;
  contents?: string;
  price?: Number;
  eventDay?: string;
  eventTime?: string;
  category?: string;
  location?: string;
  image?: [];
}

export interface IBoardAddress {
  address: string;
  zonecode: string;
}

export interface IBoardWriteUIProps {
  isEdit?: boolean;
  formState: FormState<FieldValues>;
  isModalOpen: boolean;
  data?: Pick<IQuery, "fetchBoard">;
  address?: string;
  zipcode?: string;
  isPc: any;
  isMobile: any;
  isUltra: any;
  fileUrls: string[];
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  register: UseFormRegister<FieldValues>;
  onClickCreate: (data: IBoardCreateEdit) => void;
  onClickUpdate: (data: IBoardCreateEdit) => void;
  handleOk: () => void;
  handleCancel: () => void;
  onCompleteAddressSearch: (data: IBoardAddress) => void;
  onClickAddressSearch: () => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (value: string) => void;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  onClickMoveToList: () => void;
  onClickMoveToDetail: () => void;
}
