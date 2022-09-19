import styled from "@emotion/styled";

export const TalkWrapper = styled.form`
  width: 380px;
  height: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  background: #ffffff;
  top: 8rem;
  z-index: 1;
  @media (max-width: 767px) {
    top: 8rem;
    z-index: 1;
  }
  @media (max-width: 412px) {
    width: 270px;
    height: 350px;
    top: 7rem;
    z-index: 1;
  }
`;

export const TalkHeader = styled.div`
  width: 100%;
  height: 50px;
  background: linear-gradient(90.99deg, #5920d3 0%, #2f88e5 100%);
  border-radius: 16px 16px 0px 0px;
  line-height: 50px;
  font-weight: 700;
  font-size: 20px;
  color: #ffffff;
  text-align: center;
`;

export const TalkContents = styled.div`
  width: 100%;
  height: 450px;
  overflow-y: auto;
  padding: 20px;
  padding-bottom: 0px;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Text = styled.div`
  max-width: 80%;
  word-break: break-all;
  background: #f1f7f9;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 15px;
  font-size: 13px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const SendWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid #e7e7e7;
  border-radius: 0px 0px 16px 16px;
  padding: 10px;
`;
export const TalkWrite = styled.input`
  width: 85%;
  height: 40px;
  font-size: 14px;
  padding: 10px;
  border: 1px solid #e7e7e7;
  border-radius: 8px;
  ::placeholder {
    font-size: 12px;
    display: flex;
    justify-content: center;
  }
  :focus {
    outline: none;
  }
  @media (max-width: 412px) {
    width: 80%;
  }
`;
export const SendBtn = styled.button`
  width: 10%;
  height: 40px;
  background: linear-gradient(135deg, #5920d3 0%, #2f88e5 100%);
  border-radius: 5px;
  border: none;
  color: #fff;
  cursor: pointer;
  @media (max-width: 412px) {
    width: 15%;
  }
`;
