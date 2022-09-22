import { useQuery } from "@apollo/client";

import { useRouter } from "next/router";
import { useState } from "react";

import { currentDate } from "../../../commons/function/currentDate";

import {
  IQuery,
  IQueryFetchBestOfBoardsArgs,
  IQueryFetchEventsByDateArgs,
} from "../../../commons/types/generated/types";

import MainUI from "./main.presenter";
import {
  FETCH_BEST_OF_BOARDS,
  FETCH_BEST_OF_USER,
  FETCH_EVENTS_BY_DATE,
} from "./main.queries";

export default function Main() {
  const oneWeek = currentDate(0);
  const router = useRouter();
  const [color, setColor] = useState(Array(7).fill(false));
  const [colorBestPick, setColorBestPick] = useState(Array(5).fill(false));
  const [rate, setRate] = useState(0);

  const [categoryValue, setCategoryValue] = useState("FASHION");
  const [isHover, setIsHover] = useState(Array(5).fill(false));
  const [date, setDate] = useState(oneWeek[2][0]);

  const [dateIsClick, setDateISClick] = useState(false);
  const [categoryIsClick, setCategoryIsClick] = useState(false);

  const category = ["FASHION", "ACC", "DIGITAL", "FOOD", "TOY"];

  const { data } =
    useQuery<Pick<IQuery, "fetchBestOfUser">>(FETCH_BEST_OF_USER);

  const { data: bestBoards } = useQuery<
    Pick<IQuery, "fetchBestOfBoards">,
    IQueryFetchBestOfBoardsArgs
  >(FETCH_BEST_OF_BOARDS, {
    variables: {
      category: categoryValue,
    },
  });

  const { data: eventInfo } = useQuery<
    Pick<IQuery, "fetchEventsByDate">,
    IQueryFetchEventsByDateArgs
  >(FETCH_EVENTS_BY_DATE, {
    variables: {
      date,
    },
  });

  const onMouse = (index: number) => {
    const temp = [...isHover];
    temp[index] = true;
    setIsHover(temp);
  };

  const onMoueLeave = () => {
    const allFalse = Array(5).fill(false);
    setIsHover(allFalse);
  };
  const onMouseTrue = (index: number) => {
    const temp = [...isHover];
    temp[index] = true;
    setIsHover(temp);
  };

  const onClickCategory = (category: string, index: number) => () => {
    const allFalse = Array(5).fill(false);
    setColorBestPick(allFalse);
    allFalse[index] = true;

    setColorBestPick(allFalse);
    setCategoryValue(category);
    setCategoryIsClick(true);
  };

  const onClickDate = (date: string, index: number) => {
    setDateISClick(true);
    const allFalse = Array(7).fill(false);
    setColor(allFalse);
    allFalse[index] = true;
    setDate(date);
    setColor(allFalse);
  };
  const MouseLeaveDate = () => {
    setColor(Array(7).fill(false));
  };

  const onClickMoveToDetail = (id: string) => () => {
    router.push(`${id}`);
  };

  return (
    <MainUI
      onClickDate={onClickDate}
      color={color}
      category={category}
      onClickCategory={onClickCategory}
      data={data?.fetchBestOfUser}
      bestBoards={bestBoards?.fetchBestOfBoards}
      onMouse={onMouse}
      isHover={isHover}
      onMouseTrue={onMouseTrue}
      MouseLeaveDate={MouseLeaveDate}
      onClickMoveToDetail={onClickMoveToDetail}
      eventInfo={eventInfo?.fetchEventsByDate}
      colorBestPick={colorBestPick}
      onMoueLeave={onMoueLeave}
      dateIsClick={dateIsClick}
      setDateISClick={setDateISClick}
      setColor={setColor}
      categoryIsClick={categoryIsClick}
    />
  );
}
