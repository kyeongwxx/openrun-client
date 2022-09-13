import styled from "@emotion/styled";

export const Button = styled.button<{ width: string; fontWeight: string }>`
  width: ${(props) => props.width};
  height: 77px;
  background-color: #000;
  color: #fff;
  margin: auto;
  text-align: center;
  font-size: 20px;
  font-weight: ${(props) => props.fontWeight};
  line-height: 70px;
  margin-bottom: 10px;
  border: none;
  border-radius: 24px;
  cursor: pointer;
`;
export default function BlackButton(props) {
  const { onClick, type, title, width, fontWeight, disabled } = props;

  return (
    <Button
      onClick={onClick}
      type={type}
      width={width}
      fontWeight={fontWeight}
      disabled={disabled}
    >
      {title}
    </Button>
  );
}
