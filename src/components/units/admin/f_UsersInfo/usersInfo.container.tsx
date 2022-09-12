import { useQuery } from "@apollo/client";
import { FETCH_USERS } from "../admin.queries";
import UsersInfoUI from "./usersInfo.presenter";
import { FETCH_PAYMENTS } from "./usersInfo.quries";

export default function UsersInfo() {
  const { data } = useQuery(FETCH_USERS);
  // const fetchPayment = useQuery(FETCH_PAYMENTS);
  return <UsersInfoUI data={data} />;
}
