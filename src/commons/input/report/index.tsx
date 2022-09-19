import styled from "@emotion/styled";

import { useRecoilState } from "recoil";
import { modalInputState } from "../../../components/commons/store";

const Input = styled.textarea`
  width: 100%;
  height: 70px;

  padding-left: 1rem;
  border: none;
  border-radius: 5px;
  background-color: #fafafa;
  resize: none;

  font-size: 0.9rem;
  margin-top: 20px;
  &:focus {
    outline: none;
  }
  ::placeholder {
    font-size: 0.9rem;
  }
`;

export default function ReportInput() {
  const [inputValue, setInputValue] = useRecoilState(modalInputState);
  const onChangeInput = (event: any) => {
    setInputValue(event?.target.value);
  };

  return (
    <>
      <Input placeholder="신고내용" onChange={onChangeInput} />
    </>
  );
}
