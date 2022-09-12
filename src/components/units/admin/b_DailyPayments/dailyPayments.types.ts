import { IQuery } from "../../../../commons/types/generated/types";

export interface IDailyPaymentUIProps {
  data: Pick<IQuery, "fetchUsers"> | undefined;
  FetchMoreResult: () => void;
}
