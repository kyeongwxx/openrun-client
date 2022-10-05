import { IQuery } from "../../../../commons/types/generated/types";

export interface IAdminInfoUIProps {
  data: Pick<IQuery, "fetchAdmin"> | undefined;
  // FetchMoreResult: () => void;
}
