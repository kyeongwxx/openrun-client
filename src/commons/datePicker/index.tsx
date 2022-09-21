import * as s from "./datePicker.styles";

import { currentDate } from "../function/currentDate";
import { v4 as uuidv4 } from "uuid";

import MediaQueryPc from "../mediaQuery/mediaQueryStandardPc";
import MediaQueryMobile from "../mediaQuery/mediaQueryStandardMobile";

import { useState } from "react";

import { BG_GRADATION, BOX_SHADOW_TOP } from "../cssConst";
import mediaQueryStandardForMain from "../mediaQuery/mediaQueryStandardForMain";

export default function DatePicker(props: any) {
  const isPc = MediaQueryPc();
  // const isMobile = MediaQueryMobile();
  const isMobileForMain = mediaQueryStandardForMain();

  const [pageState, setPageState] = useState(0);

  const oneWeek = currentDate(pageState);

  const date = [...oneWeek[0]];
  const day = [...oneWeek[1]];
  const dateTotal = [...oneWeek[2]];

  const onClickNextPage = () => {
    props.setColor(Array(7).fill(false));
    setPageState(pageState + 1);
    props.setDateISClick(false);
  };

  const onClickPrevPage = () => {
    if (pageState === 0) return;
    props.setColor(Array(7).fill(false));
    props.setDateISClick(false);

    setPageState(pageState - 1);
  };

  return (
    <s.Wrapper>
      {isPc && (
        <>
          {pageState !== 0 ? (
            <s.ArrowLeft onClick={onClickPrevPage} />
          ) : (
            <s.NoneArrowBtn />
          )}

          <s.Carousel>
            <s.ButtonWrapper>
              {date.map((el, index) =>
                !props.dateIsClick && index === 0 ? (
                  <s.Button
                    key={uuidv4()}
                    onClick={() => props.onClickDate(dateTotal[index], index)}
                    shadow={BOX_SHADOW_TOP}
                    border={"2px"}
                    color={"#5920d3"}
                  >
                    <s.TextDay color="transparent" bg={BG_GRADATION}>
                      {day[index]}
                    </s.TextDay>
                    <s.TextDate color={"transparent"} bg={BG_GRADATION}>
                      {el}
                    </s.TextDate>
                  </s.Button>
                ) : (
                  <s.Button
                    key={uuidv4()}
                    onClick={() => props.onClickDate(dateTotal[index], index)}
                    shadow={props.color[index] ? BOX_SHADOW_TOP : "none"}
                    border={props.color[index] ? "2px" : "1px"}
                    color={props.color[index] ? "#5920d3" : "#656565"}
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
                )
              )}
            </s.ButtonWrapper>
          </s.Carousel>
          {pageState < 2 ? (
            <s.ArrowRight onClick={onClickNextPage} />
          ) : (
            <s.NoneArrowBtn />
          )}
        </>
      )}
      {isMobileForMain && (
        <s.ButtonMobile>
          <s.TextDate color="#333" bg="none">
            Today
          </s.TextDate>
        </s.ButtonMobile>
      )}
    </s.Wrapper>
  );
}
