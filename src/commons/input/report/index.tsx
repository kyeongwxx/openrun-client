import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";

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

// export default function ReportInput(props: IEditInputProps)
// const { placeholder, color, width, name, type, defaultValue, register } =
//     props;

const ReportInput = ({ value = "", onChange }) => {
  const [inputValue, setInputValue] = useState(value);
  const onChangeInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
    onChange(event);
  };

  return (
    <>
      <Input placeholder="신고내용" onChange={onChangeInput} />
    </>
  );
};

export default ReportInput;
