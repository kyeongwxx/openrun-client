import styled from "@emotion/styled";

export const Button = styled.button`
  width: ${(props) => props.width};
  height: 77px;
  background-color: #fff;
  color: #555;
  margin: auto;
  text-align: center;
  font-size: 20px;
  font-weight: ${(props) => props.fontWeight};
  line-height: 70px;
  margin-bottom: 10px;
  border: none;
  border-radius: 24px;
  border: 1px solid #555;
  cursor: pointer;
`;
export default function WhiteButton(props) {
  const { onClick, type, title, width, fontWeight } = props;

  return (
    <Button onClick={onClick} type={type} width={width} fontWeight={fontWeight}>
      {title}
    </Button>
  );
}
