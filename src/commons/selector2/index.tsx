import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { ISelectorProps } from "./selector.types";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  selectorValue,
  selectorValue2,
  selectorValues,
} from "../../components/commons/store";
import { useRecoilState } from "recoil";

export default function Selector2(props: ISelectorProps) {
  const [sortValue, setSortValue] = useState("");
  const [sortValue2, setSortValue2] = useRecoilState(selectorValue2);
  const [sortValuesGlobal, setSortValuesGlobal] =
    useRecoilState(selectorValues);

  const handleChange = (event: SelectChangeEvent) => {
    setSortValue(event.target.value as string);
    setSortValue2(event.target.value as string);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{props.title}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={sortValue2}
        label={props.title}
        onChange={handleChange}
        sx={{ height: 50 }}
      >
        {props.sortValue.map((el, index) => (
          <MenuItem key={uuidv4()} value={el}>
            {el}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
