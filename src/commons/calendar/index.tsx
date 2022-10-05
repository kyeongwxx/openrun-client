import * as s from "./calendar.styles";
import moment from "moment";
import { useRecoilState } from "recoil";
import { dayState } from "../../components/commons/store";

export default function Calendar() {
  const [dayValue, setDayValue] = useRecoilState(dayState);

  return (
    <s.DateCalendar
      formatDay={(locale, date) => moment(date).format("D")}
      calendarType="US"
      value={dayValue}
      onChange={setDayValue}
    />
  );
}
