import { Rate } from "antd";
import styled from "@emotion/styled";
import { useState } from "react";

const MyStar = styled(Rate)``;

export default function CompleteRate() {
  const [value, setValue] = useState(0);

  console.log(value);

  return <MyStar onChange={setValue} />;
}
