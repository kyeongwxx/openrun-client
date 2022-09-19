import { useMediaQuery } from "react-responsive";

export default function MediaQueryMobile() {
  const isUltra = useMediaQuery({
    query: "(max-width:413px)",
  });
  return isUltra;
}
