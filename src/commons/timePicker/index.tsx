import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

export default function MaterialUIPickers() {
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs("2014-08-18T00:00:00")
  );

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
    console.log(value);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        label="시간 선택"
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
