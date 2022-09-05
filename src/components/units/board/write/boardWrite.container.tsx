import { useState } from "react";
import BoardWriteUI from "./boardWrite.presenter";

export default function BoardWrite() {
  // 주소 state
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const onChangeAddressDetail = (event) => {
    setAddressDetail(event.target.value);
  };

  // 주소 modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onCompleteAddressSearch = (data: any) => {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsModalOpen(false);
  };
  const onClickAddressSearch = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <BoardWriteUI
      address={address}
      onChangeAddressDetail={onChangeAddressDetail}
      isModalOpen={isModalOpen}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onClickAddressSearch={onClickAddressSearch}
      handleOk={handleOk}
      handleCancel={handleCancel}
    />
  );
}
