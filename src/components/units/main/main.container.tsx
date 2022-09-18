import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useRecoilState } from "recoil";

import { IQuery } from "../../../commons/types/generated/types";
import { onClickState } from "../../commons/store";

import MainUI from "./main.presenter";
import { FETCH_BEST_OF_USER } from "./main.queries";

export default function Main() {
  const [color, setColor] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const category = [
    "BEST FASHION",
    "BEST ACC",
    "BEST DIGITAL",
    "BEST FOOD",
    "BEST TOY",
  ];

  const { data } = useQuery(FETCH_BEST_OF_USER);
  console.log(data);

  const allFalse = () => {
    setColor([false, false, false, false, false, false, false]);
  };

  const onClickCategory = (category: string, index: number) => () => {
    console.log(category);
    console.log(index);
  };

  const onClickDate = (date: string, index: number) => () => {
    allFalse();
    const temp = [...color];
    temp[index] = !temp[index];

    setColor(temp);
  };

  return (
    <MainUI
      onClickDate={onClickDate}
      color={color}
      category={category}
      onClickCategory={onClickCategory}
      data={data?.fetchBestOfUser}
    />
  );
}
