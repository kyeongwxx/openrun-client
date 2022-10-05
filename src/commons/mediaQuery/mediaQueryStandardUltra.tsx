import { useMediaQuery } from "react-responsive";

export default function MediaQueryUltra() {
  const isUltra = useMediaQuery({
    query: "(max-width: 412px)",
  });
  return isUltra;
}
