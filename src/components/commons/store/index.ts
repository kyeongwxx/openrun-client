import { atom, selector } from "recoil";
import { getAccessToken } from "../../../commons/function/getAccessToken";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const selectorValue = atom({
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
