import { IQuery } from "../../../../commons/types/generated/types";

export interface IUsersInfoPresenterProps {
  data: Pick<IQuery, "fetchUsers"> | undefined;
  FetchMoreResult: () => void;
}
