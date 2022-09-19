import * as s from "./datePicker.styles";

import { currentDate } from "../function/currentDate";
import { v4 as uuidv4 } from "uuid";

import MediaQueryPc from "../mediaQuery/mediaQueryStandardPc";
import MediaQueryMobile from "../mediaQuery/mediaQueryStandardMobile";

import { useState } from "react";
import { useRecoilState } from "recoil";
import { onClickState } from "../../components/commons/store";
import { BG_GRADATION } from "../cssConst";

export default function DatePicker(props) {
  const isPc = MediaQueryPc();
  const isMobile = MediaQueryMobile();

  const [pageState, setPageState] = useState(0);

  const oneWeek = currentDate(pageState);

  const date = [...oneWeek[0]];
  const day = [...oneWeek[1]];
  const dateTotal = [...oneWeek[2]];

  const onClickNextPage = () => {
    setPageState(pageState + 1);
  };

  const onClickPrevPage = () => {
    if (pageState === 0) return;
    setPageState(pageState - 1);
  };

  return (
    <s.Wrapper>
      {isPc && (
        <s.Carousel>
          <s.ButtonWrapper>
            {pageState !== 0 ? (
              <s.ArrowLeft onClick={onClickPrevPage} />
            ) : (
              <s.NoneArrowBtn />
            )}

            {date.map((el, index) => (
              <s.Button
                key={uuidv4()}
                onClick={() => props.onClickDate(dateTotal[index], index)}
              >
                <s.TextDay
                  color={props.color[index] ? "transparent" : "#333"}
                  bg={props.color[index] ? BG_GRADATION : "none"}
                >
                  {day[index]}
                </s.TextDay>
                <s.TextDate
                  color={props.color[index] ? "transparent" : "#333"}
                  bg={props.color[index] ? BG_GRADATION : "none"}
                >
                  {el}
                </s.TextDate>
              </s.Button>
            ))}
            {pageState < 2 ? (
              <s.ArrowRight onClick={onClickNextPage} />
            ) : (
              <s.NoneArrowBtn />
            )}
          </s.ButtonWrapper>
        </s.Carousel>
      )}
      {isMobile && (
        <s.ButtonMobile>
          <s.TextDate color="#333" bg="none">
            Today
          </s.TextDate>
        </s.ButtonMobile>
      )}
    </s.Wrapper>
  );
}
