import ReportsUI from "./reports.presenter";
import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_REPORTS } from "./reports.quries";

export default function Reports() {
  const { data } = useQuery(FETCH_REPORTS);

  return (
    <>
      <ReportsUI data={data} />
    </>
  );
}
