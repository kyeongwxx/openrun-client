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

  const [categoryValue, setCategoryValue] = useState("FASHION");
  const [isHover, setIsHover] = useState(Array(5).fill(false));
  const [date, setDate] = useState(oneWeek[2][0]);

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
    temp[index] = !isHover[index];
    setIsHover(temp);
    console.log(temp[index]);
    console.log(temp);
  };
  const onMouseTrue = (index: number) => {
    const temp = [...isHover];
    temp[index] = true;
    setIsHover(temp);
  };

  const onClickCategory = (category: string) => () => {
    setCategoryValue(category);
  };

  const onClickDate = (date: string, index: number) => {
    setColor(Array(7).fill(false));
    const temp = [...color];
    temp[index] = true;

    setDate(date);

    setColor(temp);
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
    />
  );
}
