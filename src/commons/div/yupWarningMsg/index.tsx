import styled from "@emotion/styled";

export const Div = styled.div`
  color: red;
`;

export default function YupWarningMsg(props: any) {
  return <Div>{props.errormsg}</Div>;
}
