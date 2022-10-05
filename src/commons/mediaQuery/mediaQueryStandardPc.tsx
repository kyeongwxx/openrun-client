import { useMediaQuery } from "react-responsive";

export default function MediaQueryPc() {
  const isPc = useMediaQuery({
    query: "(min-width:768px)",
  });
  return isPc;
}
