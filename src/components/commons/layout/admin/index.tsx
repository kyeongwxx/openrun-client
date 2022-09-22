import { useRouter } from "next/router";
import { useState } from "react";
import { BG_GRADATION } from "../../../../commons/cssConst";
import CenteredTabs from "../../../../commons/tabs";
import * as s from "./admin.styles";
export default function LayoutAdmin() {
  const tabs = [
    "가입자 현황",
    "일반회원 정보",
    "일자별 매출",
    "신고 내역",
    "운영진 정보",
  ];
  const address = [
    "/admin/",
    "/admin/usersInfo/",
    "/admin/dailyPayments/",
    "/admin/reports/",
    "/admin/adminInfo/",
  ];

  const router = useRouter();
  const [color, setColor] = useState(Array(tabs.length).fill(false));
  const [isClick, setIsClick] = useState(false);

  const onClickMoveToPageWithColor = (event: string, index: number) => () => {
    setIsClick(true);
    router.push(event);
    const allFalse = Array(5).fill(false);
    setColor(allFalse);
    allFalse[index] = true;
    setColor(allFalse);
  };
  const onClickMoveToPage = (event: string) => () => {
    router.push(event);
  };

  return (
    <s.TabsWrapper>
      <s.Tabs>
        {isClick
          ? tabs.map((el, index) => (
              <s.Tab
                onClick={onClickMoveToPageWithColor(address[index], index)}
                color={color[index] ? "transparent" : "#333"}
                bg={color[index] ? BG_GRADATION : "none"}
                weight={color[index] ? "700" : "400"}
              >
                {el}
              </s.Tab>
            ))
          : tabs.map((el, index) => (
              <s.Tab
                onClick={onClickMoveToPageWithColor(address[index], index)}
                color={
                  router.asPath === address[index] ? "transparent" : "#333"
                }
                bg={router.asPath === address[index] ? BG_GRADATION : "none"}
                weight={router.asPath === address[index] ? "700" : "400"}
              >
                {el}
              </s.Tab>
            ))}
      </s.Tabs>
    </s.TabsWrapper>
  );
}
