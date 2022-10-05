export const dateSplit = (date: string) => {
  const Date = date.slice(2, 10);
  const Time = date.slice(11, 16);
  const result = `${Date} ${Time}`;

  return result;
};
