import { atom } from "recoil";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const selectorState = atom({
  key: "selectorState",
  default: "",
});
