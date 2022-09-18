import { IQuery } from "../../../../commons/types/generated/types";

export interface IReportsUIProps {
  data: Pick<IQuery, "fetchReports">;
  FetchMoreResult: () => void;
}
