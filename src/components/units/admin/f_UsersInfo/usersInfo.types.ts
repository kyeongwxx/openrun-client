import { IQuery } from "../../../../commons/types/generated/types";

export interface IUsersInfoUIProps {
  data: Pick<IQuery, "fetchUsers"> | undefined;
  FetchMoreResult: () => void;
}
