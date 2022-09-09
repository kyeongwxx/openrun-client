export const currentDate = () => {
  const date = new Date().toLocaleDateString();
  let today = Date.parse(date);
  const weekly = [];
  const dayOfWeek = [];
  weekly.push(date);
  for (var i = 0; i < 6; i++) {
    today += 86400000;
    weekly.push(new Date(today).toLocaleDateString());
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
  const changeDate = [];

  weekly.forEach((el, i) => {
    const daySplit = el.split(" ")[2];
    const remoteDot = daySplit.substring(0, daySplit.length - 1);
    changeDate.push(remoteDot);
  });

  const oneWeek = [[...changeDate], [...dayOfWeek]];

  return oneWeek;
};
