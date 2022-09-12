import { atom, selector } from "recoil";
import { getAccessToken } from "../../../commons/function/getAccessToken";
import dayjs, { Dayjs } from "dayjs";
import { v1 } from "uuid";

export const visitedPageState = atom({
  key: `visitedPageState/${v1()}`,
  default: "/",
});

export const accessTokenState = atom({
  key: `accessTokenState/${v1()}`,
  default: "",
});

export const selectorValue = atom({
  key: `selectorState/${v1()}`,
  default: "",
});

export const selectorValues = atom({
  key: `selectorValues/${v1()}`,
  default: [],
});

export const userInfoValue = atom({
  key: `userInfo/${v1()}`,
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

export const logoutState = atom({
  key: "logoutState",
  default: false,
});

export const restoreAccessTokenLoadable = selector({
  key: `restoreAccessTokenLoadable/${v1()}`,
  get: async () => {
    const newAccessToken = await getAccessToken();

    return newAccessToken;
  },
});

export const dayState = atom({
  key: `dayState/${v1()}`,
  default: new Date(),
});

export const timeState = atom({
  key: `timeState/${v1()}`,
  default: dayjs("2014-08-18T00:00:00"),
});
export const openValue = atom({
  key: `openState/${v1()}`,
  default: false,
});
