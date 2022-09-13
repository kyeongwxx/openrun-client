import { useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";
import MypageDealUI from "./dealList.presenter";
import { FETCH_PAYMENT_HISTORY } from "./dealList.queries";

export default function MypageDealList() {
  const { data, fetchMore } = useQuery<Pick<IQuery, "fetchPaymentHistory">>(
    FETCH_PAYMENT_HISTORY
  );
  const onFetchMore = () => {
    // if (!data) return;
    // fetchMore({
    //   variables: { page: Math.ceil(data?.fetchPaymentHistory.length / 10) + 1 },
    //   updateQuery: (prev, { fetchMoreResult }) => {
    //     if (!fetchMoreResult?.fetchPaymentHistory)
    //       return { fetchPaymentHistory: [...prev.fetchPaymentHistory] };
    //     return {
    //       fetchPaymentHistory: [
    //         ...prev.fetchPaymentHistory,
    //         ...fetchMoreResult?.fetchPaymentHistory,
    //       ],
    //     };
    //   },
    // });
  };
  console.log(data);
  return (
    <MypageDealUI data={data?.fetchPaymentHistory} onFetchMore={onFetchMore} />
  );
}
