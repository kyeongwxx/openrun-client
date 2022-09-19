import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import type { CheckboxValueType } from "antd/es/checkbox/Group";
import { useState } from "react";
import * as s from "./checkbox.styles";

export default function CheckBox(props: any) {
  const defaultCheckedList = [""];
  const plainOptions = [props.essential, props.choice];

  const [checkAll, setCheckAll] = useState(false);
  const [checkedList, setCheckedList] =
    useState<CheckboxValueType[]>(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(true);

  const onChange = (list: CheckboxValueType[]) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
    console.log(list);
  };

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };
  return (
    <>
      <Checkbox
        style={{
          height: "30px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
      >
        {props.totalAgree}
      </Checkbox>
      <s.DivideLine />

      <Checkbox.Group
        style={{
          height: "50px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
        options={plainOptions}
        value={checkedList}
        onChange={onChange}
      />
    </>
  );
}
