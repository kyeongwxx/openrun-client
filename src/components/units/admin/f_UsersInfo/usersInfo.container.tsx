import { useQuery } from "@apollo/client";
import { FETCH_USERS } from "./usersInfo.queries";
import UsersInfoUI from "./usersInfo.presenter";
import { FETCH_PAYMENTS } from "./usersInfo.queries";
export default function UsersInfo() {
  const { data } = useQuery(FETCH_USERS);

  return <UsersInfoUI data={data} />;
}
