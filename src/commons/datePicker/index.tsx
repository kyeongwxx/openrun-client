import * as s from "./datePicker.styles";

import { currentDate } from "../function/currentDate";
import { v4 as uuidv4 } from "uuid";

import MediaQueryPc from "../mediaQuery/mediaQueryStandardPc";
import MediaQueryMobile from "../mediaQuery/mediaQueryStandardMobile";

import { useState } from "react";

export default function DatePicker() {
  const [pageState, setPageState] = useState(0);

  const oneWeek = currentDate(pageState);

  const date = [...oneWeek[0]];
  const day = [...oneWeek[1]];

  const isPc = MediaQueryPc();
  const isMobile = MediaQueryMobile();

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
              <s.NoneArrowBtn></s.NoneArrowBtn>
            )}

            {date.map((el, index) => (
              <s.Button key={uuidv4()}>
                <s.TextDay>{day[index]}</s.TextDay>
                <s.TextDate>{el}</s.TextDate>
              </s.Button>
            ))}
            {pageState < 3 ? (
              <s.ArrowRight onClick={onClickNextPage} />
            ) : (
              <s.NoneArrowBtn></s.NoneArrowBtn>
            )}
          </s.ButtonWrapper>
        </s.Carousel>
      )}
      {isMobile && (
        <s.ButtonMobile>
          <s.TextDate>Today</s.TextDate>
        </s.ButtonMobile>
      )}
    </s.Wrapper>
  );
}
