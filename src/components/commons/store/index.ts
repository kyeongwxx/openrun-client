import { atom } from "recoil";
import dayjs, { Dayjs } from "dayjs";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const selectorState = atom({
  key: "selectorState",
  default: "",
});

export const dayState = atom({
  key: "dayState",
  default: new Date(),
});

export const timeState = atom({
  key: "timeState",
  default: dayjs("2014-08-18T00:00:00"),
});
