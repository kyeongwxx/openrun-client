import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useRouter } from "next/router";
import * as s from "./tabs.styles";

export default function CenteredTabs(props) {
  const [value, setValue] = useState(0);
  const router = useRouter();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const onClickMoveToPage = (event: string) => () => {
    router.push(event);
  };

  return (
    <>
      {/* <Box sx={{ width: "100%", bgcolor: "background.paper" }}> */}
      <s.BoxCustom>
        <s.TabsCustom
          variant="scrollable"
          value={value}
          onChange={handleChange}
          centered
        >
          {props.tabs.map((el, index) =>
            props.address ? (
              <s.TabCustom
                label={el}
                onClick={onClickMoveToPage(props.address[index])}
              />
            ) : (
              <Tab label={el} />
            )
          )}
        </s.TabsCustom>
      </s.BoxCustom>
    </>
  );
}
//사용 예시
// const mainPage = () => {
//   return (
//     <div>
//       <CenteredTabs tabs={["m1", "m2", "m3", "m4", "m5"]} />
//     </div>
//   );
// };
