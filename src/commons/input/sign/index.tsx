import styled from "@emotion/styled";
import { ISignInputProps } from "./input.types";
const Input = styled.input`
  width: ${(props) => props.width};

  height: 77px;
  border: none;
  border-radius: 24px;
  background-color: #f7f7f7;

  font-size: 20px;
  margin-bottom: 20px;
  &:focus {
    outline: none;
  }
`;

export default function SignInput(props: ISignInputProps) {
  const { placeholder, color, width, name } = props;
  return (
    <Input
      //   {...props.register(name)}
      placeholder={placeholder}
      color={color}
      width={width}
    ></Input>
  );
}
