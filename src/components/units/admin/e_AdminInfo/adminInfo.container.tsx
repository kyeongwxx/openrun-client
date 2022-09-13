import { useQuery } from "@apollo/client";
import AdminInfoUI from "./adminInfo.presenter";
import { FETCH_ADMIN } from "./adminInfo.queries";

export default function AdminInfo() {
  const { data } = useQuery(FETCH_ADMIN);

  return <AdminInfoUI data={data} />;
}
