import { atom, selector } from "recoil";
import { getAccessToken } from "../../../commons/function/getAccessToken";
import dayjs, { Dayjs } from "dayjs";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const selectorState = atom({
  key: "selectorState",
  default: "",
});

export const userInfoValue = atom({
  key: "userInfo",
  default: {
    id: "",
    email: "",
    nickName: "",
    phone: "",
    point: "",
    rating: "",
    profileImg: "",
    isAdmin: "",

    report: "",
    loginType: "",
    createdAt: "",
    updatedAt: "",
  },
});

export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});

export const dayState = atom({
  key: "dayState",
  default: new Date(),
});

export const timeState = atom({
  key: "timeState",
  default: dayjs("2014-08-18T00:00:00"),
});
