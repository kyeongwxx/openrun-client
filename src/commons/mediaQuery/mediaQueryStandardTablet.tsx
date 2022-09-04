import { useMediaQuery } from "react-responsive";

export default function MediaQueryTablet() {
  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width:1199px)",
  });
  return isTablet;
}
