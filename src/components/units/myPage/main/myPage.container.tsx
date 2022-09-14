import { useRef } from "react";
import MyPageUI from "./myPage.presenter";

export default function MyPage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const onClickTop = () => {
    scrollRef.current?.click();

    console.log(scrollRef.current?.id);

    scrollRef.current?.scrollTo({ left: 0, top: 250, behavior: "smooth" });
  };
  return <MyPageUI onClickTop={onClickTop} />;
}
