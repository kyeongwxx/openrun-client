import { IQuery } from "../../../../commons/types/generated/types";

export interface IUsersChartUIProps {
  data: Pick<IQuery, "fetchUsersCountByDate"> | undefined;
  FetchMoreResult: () => void;
}
