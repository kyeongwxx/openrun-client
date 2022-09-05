import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { useRecoilState } from "recoil";
import { timeState } from "../../components/commons/store";

export default function MaterialUIPickers() {
  const [timeValue, setTimeValue] = useRecoilState<Dayjs | null>(timeState);

  const handleChange = (newValue: Dayjs | null) => {
    setTimeValue(newValue);
    console.log(timeValue?.$d);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        label="시간 선택"
        value={timeValue}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
