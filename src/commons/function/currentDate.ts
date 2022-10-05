import { dateForEvent } from "./dateForEvent";
import { dateSplit } from "./dateSlice";

export const currentDate = (pageState: number) => {
  let date = "";
  let today = 0;
  const weekly = [];
  const dayOfWeek: string[] = [];
  if (pageState > 0) {
    const now = new Date();

    date = new Date(
      now.setDate(now.getDate() + 7 * pageState)
    ).toLocaleDateString();

    today = Date.parse(date) - 9 * 60 * 60 * 1000;
  } else {
    date = new Date().toLocaleDateString();
    today = Date.parse(date) - 9 * 60 * 60 * 1000;
  }

  for (var i = 0; i < 7; i++) {
    today += 86400000; // 1일 ms로 변환 (1000*60*60*24)

    weekly.push(new Date(today).toISOString());
  }

  weekly.forEach((el, i) => {
    const date = new Date(el);

    const day = date.getDay();
    let changeDay = "";
    if (day === 0) changeDay = "Sun";
    if (day === 1) changeDay = "Mon";
    if (day === 2) changeDay = "Thu";
    if (day === 3) changeDay = "Wed";
    if (day === 4) changeDay = "Thur";
    if (day === 5) changeDay = "Fri";
    if (day === 6) changeDay = "Sat";
    dayOfWeek.push(changeDay);
  });
  const realDate: string[] = [];
  const changeDate: string[] = [];

  weekly.forEach((el, i) => {
    const daySplit = dateSplit(el);
    const day = daySplit.slice(6, 8);

    changeDate.push(day);
  });

  weekly.forEach((el, i) => {
    const daySplit = dateForEvent(el);

    realDate.push(daySplit);
  });

  const oneWeek = [[...changeDate], [...dayOfWeek], [...realDate]];

  return oneWeek;
};
