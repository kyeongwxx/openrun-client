// import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { useRecoilState } from "recoil";
import { selectorValue } from "../../components/commons/store";
import { ISelectorProps } from "./selector.types";
import { maxHeight, maxWidth } from "@mui/system";

export default function Selector(props: ISelectorProps) {
  const [sortValue, setSortValue] = useRecoilState(selectorValue);

  const handleChange = (event: SelectChangeEvent) => {
    setSortValue(event.target.value as string);
    console.log(sortValue);
  };
  return (
    <FormControl variant="standard" fullWidth sx={{ height: 10 }}>
      <InputLabel id="demo-simple-select-label">{props.title}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={sortValue}
        label="Age"
        onChange={handleChange}
        sx={{ height: 20 }}
      >
        {props.sortValue.map((el, index) => (
          <MenuItem value={el}>{el}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
