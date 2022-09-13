import { useQuery } from "@apollo/client";

import { IQuery } from "../../../commons/types/generated/types";

import MainUI from "./main.presenter";
import { FETCH_BEST_OF_USER } from "./main.queries";

export default function Main() {
  //   const { data } = useQuery(FETCH_BEST_OF_USER);
  //   console.log(data);

  return <MainUI />;
}
