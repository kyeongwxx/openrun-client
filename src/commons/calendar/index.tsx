import * as s from "./calendar.styles";
import moment from "moment";
import { useState } from "react";

export default function Calendar() {
  const [value, setValue] = useState(new Date());
  const onClickDay = () => {
    console.log(value);
  };

  return (
    <s.DateCalendar
      formatDay={(locale, date) => moment(date).format("D")}
      calendarType="US"
      value={value}
      onChange={setValue}
      onClickDay={onClickDay}
    />
  );
}
