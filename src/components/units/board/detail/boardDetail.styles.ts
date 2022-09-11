import styled from "@emotion/styled";

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
    flex-direction: column;
    align-items: center;
  }
`;
export const ImageWrapper = styled.div`
  width: 100%;
  height: 400px;
  margin: 0 auto;
  overflow: hidden;
  padding-right: 6.438rem;
  @media (max-width: 767px) {
    width: 50%;
    height: 200px;
    padding: 0;
    margin-bottom: 1rem;
  }
`;
export const Image = styled.img`
  border-radius: 24px;
  width: 100%;
  height: 100%;
  object-fit: cover;
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
export const Status = styled.div`
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
export const Name = styled.div`
  font-weight: 700;
  font-size: 1.375rem;
  color: #555;
  padding-bottom: 2.188rem;
`;
export const Category = styled.div`
  font-weight: 700;
  font-size: 1.375rem;
  color: #555;
  padding-bottom: 2.188rem;
`;
export const Date = styled.div`
  font-weight: 700;
  font-size: 1.375rem;
  color: #555;
  padding-bottom: 2.188rem;
  display: flex;
  flex-direction: row;
`;
export const eventDay = styled.div`
  margin-right: 1rem;
`;
export const eventTime = styled.div``;
export const Location = styled.div`
  font-weight: 700;
  font-size: 1.125rem;
  color: rgba(0, 0, 0, 0.3);
  padding-bottom: 1.188rem;
`;
export const Address = styled.div`
  font-weight: 700;
  font-size: 1.375rem;
  color: #555;
  padding-bottom: 0.5rem;
`;
export const AddressDetail = styled.div`
  font-weight: 700;
  font-size: 1.375rem;
  color: #555;
  padding-bottom: 2.188rem;
`;
export const Price = styled.div`
  width: 90%;
  font-weight: 700;
  font-size: 1.5rem;
  color: #555;
  text-align: right;
  padding: 2.188rem 0;
`;
export const DivideLine = styled.div`
  width: 100%;
  border-bottom: 1px solid #d9d9d9;
`;
export const PenaltyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 2.188rem;
  padding-bottom: 2.063rem;
`;
export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const PenaltyBtn = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 9px;
  border: 1px solid #393939;
  background: white;
  margin-right: 0.5rem;
`;
export const PenaltyText = styled.div`
  font-size: 0.813rem;
  color: #555;
`;
export const DetailText = styled.div`
  font-weight: 400;
  font-size: 0.75rem;
  color: #808080;
`;
export const BtnsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const ChatBtn = styled.button`
  width: 15%;
  height: 63px;
  background: #ffffff;
  border: 1px solid #555;
  border-radius: 16px;
  position: relative;
`;
export const ChatCnt = styled.div`
  width: 17px;
  height: 17px;
  border-radius: 8.5px;
  position: absolute;
  top: -7%;
  right: -7%;
  background: #ff0000;
  font-weight: 400;
  font-size: 0.75rem;
  color: #ffffff;
  text-align: center;
  line-height: 17px;
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
  color: #222222;
`;
export const PickBtn = styled.button`
  width: 40%;
  height: 63px;
  font-weight: 700;
  font-size: 1.25rem;
  color: #000000;
  background: #ffffff;
  border: 1px solid #555;
  border-radius: 16px;
`;
export const ApplyBtn = styled.button`
  width: 40%;
  height: 63px;
  font-weight: 700;
  font-size: 1.25rem;
  color: #ffffff;
  background: linear-gradient(93.72deg, #5920d3 0%, #2f88e5 99.32%);
  border: none;
  border-radius: 16px;
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
`;

export const ApplyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
`;

export const ApplyList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 1.313rem;
`;
export const ApplyItem = styled.div`
  width: 77%;
  height: 53px;
  display: flex;
  flex-direction: row;
  background: #f5f5f5;
  border-radius: 16px;
  align-items: center;
  @media (max-width: 767px) {
    width: 82%;
  }
`;
export const RunnerIcon = styled.img`
  padding-left: 2.688rem;
  @media (max-width: 767px) {
    padding-left: 1rem;
  }
`;
export const RunnerName = styled.div`
  font-weight: 700;
  font-size: 1.125rem;
  color: rgba(0, 0, 0, 0.8);
  padding-left: 1.063rem;
  padding-right: 3rem;
  @media (max-width: 767px) {
    padding-right: 0.5rem;
  }
`;
export const Rating = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Star = styled.img``;
export const CntWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
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
  @media (max-width: 767px) {
    width: 15%;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
