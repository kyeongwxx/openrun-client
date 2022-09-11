import styled from "@emotion/styled";
import "react-quill/dist/quill.snow.css";
import { Modal } from "antd";
import "antd/dist/antd.css";
import DaumPostcode from "react-daum-postcode";
import "react-calendar/dist/Calendar.css";

import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const Wrapper = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;
export const ProductInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const ProductInfoText = styled.div`
  font-weight: 700;
  font-size: 1.125rem;
  color: #555;
  padding-bottom: 1.188rem;
`;
export const SelectWrapper = styled.div`
  width: 25%;
`;
export const TitleInput = styled.input`
  height: 56px;
  background: #f7f7f7;
  border-radius: 16px;
  border: none;
  padding-left: 1rem;
  margin: 1rem 0;
  font-weight: 400;
  font-size: 1.125rem;
`;
export const PriceInput = styled.input`
  height: 56px;
  background: #f7f7f7;
  border-radius: 16px;
  padding-left: 1rem;
  border: none;
  font-weight: 400;
  font-size: 1.125rem;
`;
export const CalenderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 767px) {
    flex-direction: column;
  }
  .react-calendar {
    width: 45%;
    max-width: 100%;
    background-color: #fff;
    color: #222;
    border-radius: 8px;
    border: none;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.125em;
    @media (max-width: 767px) {
      width: 100%;
      margin-bottom: 2.188rem;
    }
  }
  padding-bottom: 3.75rem;
`;
export const ProductDateWrapper = styled.div`
  margin-top: 3.75rem;
`;
export const ProductDateText = styled.div`
  font-weight: 700;
  font-size: 1.125rem;
  color: #555;
  padding-bottom: 1.188rem;
`;

export const ProductLocationWrapper = styled.div`
  padding-bottom: 3.75rem;
`;
export const ProductLocationText = styled.div`
  font-weight: 700;
  font-size: 1.125rem;
  color: #555;
  padding-bottom: 1.188rem;
`;
export const MapWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
export const AddressWrapper = styled.div`
  width: calc(55% - 5rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 5rem;
  @media (max-width: 767px) {
    width: 100%;
    padding-top: 1.188rem;
    margin-left: 0;
  }
`;
export const ZipcodeWrapper = styled.div`
  @media (max-width: 767px) {
    margin-bottom: 1.188rem;
  }
`;
export const Zipcode = styled.input`
  text-align: center;
  width: 30%;
  height: 56px;
  background: #f7f7f7;
  border-radius: 16px;
  border: none;
  font-weight: 400;
  font-size: 1.125rem;
  margin-right: 1rem;
`;
export const AddressButton = styled.button`
  width: 30%;
  height: 56px;
  background: #555;
  color: #fff;
  border-radius: 16px;
  border: none;
  font-weight: 400;
  font-size: 1.125rem;
  cursor: pointer;
`;
export const AddressInput = styled.input`
  height: 56px;
  background: #f7f7f7;
  border-radius: 16px;
  border: none;
  padding-left: 1rem;
  font-weight: 400;
  font-size: 1.125rem;
  @media (max-width: 767px) {
    margin-bottom: 1.188rem;
  }
`;
export const AddressDetailInput = styled.input`
  height: 56px;
  background: #f7f7f7;
  border-radius: 16px;
  border: none;
  padding-left: 1rem;
  font-weight: 400;
  font-size: 1.125rem;
`;
export const RequestWrapper = styled.div`
  padding-bottom: 3.75rem;
`;
export const RequestText = styled.div`
  font-weight: 700;
  font-size: 1.125rem;
  color: #555;
  padding-bottom: 1.188rem;
`;
export const RequestInput = styled(ReactQuill)`
  width: 100%;
  height: 430px;
  padding-bottom: 40px;
  @media (max-width: 767px) {
    height: 250px;
  }
`;
export const ImageUploadWrapper = styled.div`
  width: 100%;
  padding-bottom: 3.75rem;
`;
export const ImageUploadText = styled.div`
  font-weight: 700;
  font-size: 1.125rem;
  color: #555;
  padding-bottom: 1.188rem;
`;
export const Images = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
`;
export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 767px) {
    justify-content: space-between;
  }
`;
export const CreateBtn = styled.button`
  width: 30%;
  height: 56px;
  background: #555;
  color: #fff;
  border-radius: 16px;
  border: none;
  font-weight: 400;
  font-size: 1.125rem;
  margin-right: 2rem;
  cursor: pointer;
  :hover {
    background: linear-gradient(93.72deg, #5920d3 0%, #2f88e5 99.32%);
  }
  @media (max-width: 767px) {
    width: 45%;
    margin-right: 0;
  }
`;
export const MoveBtn = styled.button`
  width: 30%;
  height: 56px;
  background: #555;
  color: #fff;
  border-radius: 16px;
  border: none;
  font-weight: 400;
  font-size: 1.125rem;
  cursor: pointer;
  :hover {
    background: linear-gradient(93.72deg, #5920d3 0%, #2f88e5 99.32%);
  }
  @media (max-width: 767px) {
    width: 45%;
    margin-right: 0;
  }
`;

export const AddressModal = styled(Modal)``;
export const AddressSearchInput = styled(DaumPostcode)``;
