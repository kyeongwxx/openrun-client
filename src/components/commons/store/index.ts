import { atom } from "recoil";

export const isChecked = atom({
  key: "isChecked",
  default: false,
});

export const selectorState = atom({
  key: "selectorState",
  default: "",
});
