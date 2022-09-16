import { useQuery } from "@apollo/client";
import { useRef } from "react";
import MyPageUI from "./myPage.presenter";
import { FETCH_USER_CHATROOM } from "./myPage.queries";

export default function MyPage() {
  const { data } = useQuery(FETCH_USER_CHATROOM);
  console.log(data);
  return <MyPageUI />;
}
