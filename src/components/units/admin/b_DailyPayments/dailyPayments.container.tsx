import { useQuery } from "@apollo/client";
import DailyPaymentsUI from "./dailyPayments.presenter";
import { FETCH_PAYMENTS } from "./dailyPayments.queries";

export default function DailyPayments() {
  const { data } = useQuery(FETCH_PAYMENTS);

  return <DailyPaymentsUI data={data} />;
}
