import { useMediaQuery } from "react-responsive";

export default function MediaQueryMobile() {
  const isMobile = useMediaQuery({
    query: "(min-width:413px) and (max-width:767px)",
  });
  return isMobile;
}
