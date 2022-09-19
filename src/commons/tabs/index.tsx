import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useRouter } from "next/router";
import * as s from "./tabs.styles";
import { v4 as uuidv4 } from "uuid";

export default function CenteredTabs(props: any) {
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
          scrollButtons={false}
        >
          {props.tabs.map((el: any, index: any) =>
            props.address ? (
              <s.TabCustom
                key={uuidv4()}
                label={el}
                onClick={onClickMoveToPage(props.address[index])}
              />
            ) : (
              <Tab key={uuidv4()} label={el} />
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
