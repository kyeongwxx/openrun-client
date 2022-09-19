import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Rate } from "antd";

const ZoominOut = keyframes`
  from{
		transform: scale(1);
	}
	to{
		transform: scale(1.05);
	}
`;

export const Wrapper = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ProductWrapper = styled.div`
  width: 75%;
  display: flex;
  flex-direction: row;
  padding-bottom: 5rem;
  @media (max-width: 767px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;
export const ImgWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 6.438rem;
  @media (max-width: 767px) {
    padding-right: 0;
    align-items: center;
  }
`;
export const ImageWrapper = styled.div`
  width: 100%;
  height: 400px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 24px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  @media (max-width: 767px) {
    width: 70%;
    height: 400px;
    padding: 0;
    margin-bottom: 1rem;
  }
`;
export const Image = styled.img`
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  border-radius: 24px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const TimerWrapper = styled.div`
  @media (max-width: 767px) {
    width: 75%;
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 412px) {
    /* display: none; */
  }
`;
export const Triangle = styled.div`
  width: 0px;
  height: 0px;

  border-top: 6px solid transparent;
  border-bottom: 6px solid #555;
  border-right: 6px solid transparent;
  border-left: 6px solid #555;

  margin-top: 1rem;
`;
export const InfoText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 65%;
  height: 45px;
  background: #555;
  color: #fff;
  font-size: 1.25rem;
  @media (max-width: 767px) {
    width: 75%;
    height: 40px;
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }
  @media (max-width: 412px) {
    height: 30px;
    font-size: 0.75rem;
  }
`;
export const Text = styled.div`
  padding-left: 0.5rem;
`;
export const ProductInfoWrapper = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
`;
export const StatusWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Status1 = styled.div`
  width: 47px;
  height: 25px;
  text-align: center;
  line-height: 25px;
  font-weight: 400;
  font-size: 0.75rem;
  color: #7dd03c;
  border: 1px solid #7dd03c;
  margin-bottom: 2rem;
`;
export const Status2 = styled.div`
  width: 47px;
  height: 25px;
  text-align: center;
  line-height: 25px;
  font-weight: 400;
  font-size: 0.75rem;
  color: #ff9100;
  border: 1px solid #ff9100;
  margin-bottom: 2rem;
`;
export const Status3 = styled.div`
  width: 47px;
  height: 25px;
  text-align: center;
  line-height: 25px;
  font-weight: 400;
  font-size: 0.75rem;
  color: #d03c3c;
  border: 1px solid #d03c3c;
  margin-bottom: 2rem;
`;
export const MutationBtns = styled.div`
  display: flex;
  flex-direction: row;
`;
export const UpdateBtn = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
export const DeleteBtn = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 0.4rem;
  cursor: pointer;
`;
export const Title = styled.div`
  font-weight: 700;
  font-size: 1.375rem;
  color: #555;
  padding-bottom: 2.188rem;
  text-decoration: underline;
  @media (max-width: 412px) {
    font-size: 1rem;
  }
`;
export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
`;
export const Category = styled.div`
  font-weight: 700;
  font-size: 1.375rem;
  color: #555;
  @media (max-width: 412px) {
    font-size: 1rem;
  }
`;
export const DateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
`;
export const Date = styled.div`
  font-weight: 700;
  font-size: 1.375rem;
  color: #555;
  display: flex;
  flex-direction: row;
  @media (max-width: 412px) {
    font-size: 1rem;
  }
`;
export const eventDay = styled.div`
  margin-right: 1rem;
  @media (max-width: 412px) {
    margin-right: 0.5rem;
  }
`;
export const eventTime = styled.div``;
export const LocationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
`;
export const Location = styled.div`
  font-weight: 700;
  font-size: 1.125rem;
  color: rgba(0, 0, 0, 0.3);
  @media (max-width: 412px) {
    font-size: 1rem;
  }
`;
export const AddressWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Address = styled.div`
  font-weight: 700;
  font-size: 1.375rem;
  color: #555;
  margin-right: 1rem;
  @media (max-width: 412px) {
    font-size: 1rem;
    margin-right: 0.3rem;
  }
`;
export const AddressDetail = styled.div`
  font-weight: 700;
  font-size: 1.375rem;
  color: #555;
  @media (max-width: 412px) {
    font-size: 1rem;
  }
`;
export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;
export const Price = styled.div`
  font-weight: 700;
  font-size: 1.375rem;
  color: #555;
  @media (max-width: 412px) {
    font-size: 1rem;
  }
`;
export const DivideLine = styled.div`
  width: 100%;
  border-bottom: 1px solid #d9d9d9;
`;
export const BtnsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  padding-top: 3rem;
`;
export const ActivatedChatBtn = styled.button`
  width: 15%;
  height: 63px;
  background: linear-gradient(93.72deg, #5920d3 0%, #2f88e5 99.32%);
  border: none;
  border-radius: 16px;
  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  color: #fff;
  transition: all 0.3s ease;
  animation: ${ZoominOut} 1s 1s infinite ease-in-out alternate;
  @media (max-width: 412px) {
    height: 45px;
  }
`;
export const ActivatedChatIcon = styled.img`
  width: 50%;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const ActivatedChatText = styled.div`
  font-weight: 400;
  font-size: 0.75rem;
  color: #fff;
`;
export const ChatBtn = styled.button`
  width: 15%;
  height: 63px;
  background: #ffffff;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  color: #222222;
  @media (max-width: 412px) {
    height: 45px;
  }
`;
export const ChatIcon = styled.img`
  width: 50%;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const ChatText = styled.div`
  font-weight: 400;
  font-size: 0.75rem;
`;
export const PickBtn = styled.button`
  width: 40%;
  height: 63px;
  font-weight: 700;
  font-size: 1.25rem;
  color: #000000;
  background: #ffffff;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  @media (max-width: 412px) {
    font-size: 1rem;
    height: 45px;
  }
`;
export const PickText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const PickIcon = styled.img``;
export const ApplyBtn = styled.button`
  width: 40%;
  height: 63px;
  font-weight: 700;
  font-size: 1.25rem;
  color: #ffffff;
  background: linear-gradient(93.72deg, #5920d3 0%, #2f88e5 99.32%);
  border: none;
  border-radius: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  @media (max-width: 412px) {
    font-size: 1rem;
    height: 45px;
  }
`;
export const RequestWrapper = styled.div`
  width: 100%;
  height: 326px;
  background: #fafafa;
  border-radius: 16px;
  font-weight: 400;
  font-size: 1.5rem;
  color: #656565;
  padding: 2rem;
  margin-top: 3rem;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  @media (max-width: 412px) {
    font-size: 1rem;
    height: 163px;
    margin-top: 1rem;
  }
`;

export const ApplyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
  @media (max-width: 412px) {
    padding-top: 1rem;
  }
`;

export const ApplyList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 1.313rem;
  @media (max-width: 412px) {
    align-items: center;
  }
`;
export const ApplyItem = styled.div`
  width: 77%;
  height: 53px;
  display: flex;
  flex-direction: row;
  background: #f5f5f5;
  border-radius: 16px;
  align-items: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 767px) {
    width: 82%;
  }
  @media (max-width: 412px) {
    flex-direction: column;
    height: 80px;
    justify-content: center;
  }
`;
export const RunnerIcon = styled.img`
  padding-left: 2.688rem;
  @media (max-width: 767px) {
    display: none;
  }
`;
export const RunnerName = styled.div`
  width: 200px;
  font-weight: 700;
  font-size: 1.125rem;
  color: rgba(0, 0, 0, 0.8);
  padding-left: 1.063rem;
  padding-right: 3rem;
  @media (max-width: 767px) {
    width: 100px;
    font-size: 1rem;
    margin-right: 1rem;
    padding-right: 0px;
  }
  @media (max-width: 412px) {
    width: 100px;
    text-align: center;
    font-size: 0.8rem;
  }
`;
export const Rating = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 767px) {
    width: 200px;
  }
  @media (max-width: 412px) {
    width: 160px;
  }
`;
export const Star = styled(Rate)``;
export const RatingText = styled.div`
  font-weight: 700;
  font-size: 0.75rem;
  color: rgba(0, 0, 0, 0.5);
  padding-left: 0.5rem;
  line-height: 30px;
`;
export const CntWrapper = styled.div`
  width: 35%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  @media (max-width: 412px) {
    justify-content: center;
  }
`;
export const RunCnt = styled.div`
  font-weight: 700;
  font-size: 0.75rem;
  color: rgba(0, 0, 0, 0.5);
  padding-right: 2.5rem;
`;
export const SuccessRate = styled.div`
  font-weight: 700;
  font-size: 0.75rem;
  color: #1f8716;
  padding-right: 2.5rem;
  @media (max-width: 767px) {
    padding-right: 1rem;
  }
  @media (max-width: 412px) {
    font-size: 0.5rem;
    padding-right: 0;
  }
`;
export const SelectBtn = styled.div`
  width: 20%;
  height: 53px;
  background: linear-gradient(104.75deg, #5920d3 8.19%, #2f88e5 91.61%);
  border-radius: 16px;
  font-weight: 700;
  font-size: 1.25rem;
  color: #ffffff;
  text-align: center;
  line-height: 53px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  @media (max-width: 767px) {
    width: 15%;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 412px) {
    width: 40px;
    height: 35px;
    margin-left: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
  }
`;
export const DefaultApplyList = styled.div`
  width: 100%;
  height: 326px;
  background: #fafafa;
  border-radius: 16px;
  font-weight: 400;
  font-size: 1.5rem;
  color: #656565;
  padding: 2rem;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  @media (max-width: 412px) {
    font-size: 1rem;
    height: 163px;
    margin-top: 1rem;
  }
`;
export const Info = styled.img`
  width: 10%;
  @media (max-width: 767px) {
    width: 15%;
  }
`;
export const DefaultText = styled.div``;

// 게시물 수정, 삭제 모달
export const MBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
`;
export const MWrapper = styled.button`
  position: fixed;
  left: 50%;
  top: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translate(-50%, -50%);
  width: 465px;
  height: 260px;
  padding: 20px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
`;
export const MButtonWrapper = styled.div`
  width: 465px;
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin-right: 50px;
  padding-bottom: 15px;
`;
export const MCloseButton = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  :hover {
    font-weight: bold;
  }
`;
export const MTitle = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  color: #222;
  padding-bottom: 20px;
`;
export const MContents = styled.div`
  font-weight: 400;
  font-size: 1rem;
  color: #555;
  padding-bottom: 30px;
`;
export const MMutationBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const MUpdate = styled.button`
  width: 100px;
  font-weight: 400;
  font-size: 1.15rem;
  color: #fff;
  background: #555;
  margin-right: 20px;
  cursor: pointer;
  border-radius: 16px;
  border: none;
`;
export const MDelete = styled.button`
  width: 100px;
  font-weight: 400;
  font-size: 1.15rem;
  background: #eec1ba;
  color: #fff;
  cursor: pointer;
  border-radius: 16px;
  border: none;
`;
