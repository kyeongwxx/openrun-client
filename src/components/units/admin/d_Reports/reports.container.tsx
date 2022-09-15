import ReportsUI from "./reports.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_REPORTS } from "./reports.queries";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export default function Reports() {
  const { data } = useQuery(FETCH_REPORTS);

  return (
    <>
      <ReportsUI data={data} />
    </>
  );
}
