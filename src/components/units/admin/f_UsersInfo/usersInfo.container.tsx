import { useQuery } from "@apollo/client";
import { FETCH_USERS } from "../admin.queries";
import UsersInfoUI from "./usersInfo.presenter";

export default function UsersInfo() {
  const { data } = useQuery(FETCH_USERS);

  return <UsersInfoUI data={data} />;
}
