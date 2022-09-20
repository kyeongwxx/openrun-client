import { useMediaQuery } from "react-responsive";

export default function mediaQueryStandardForMain() {
  const isMobileForMain = useMediaQuery({
    query: " (max-width:767px)",
  });
  return isMobileForMain;
}
