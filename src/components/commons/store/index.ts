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
export const selectorValue2 = atom({
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
    countByDate: "",
    paymentTotal: "",
    boardTotal: "",
    loginDate: "",
  },
});

export const logoutState = atom({
  key: "logoutState",
  default: false,
});

export const notificationValue = atom({
  key: "notificationValue",
  default: {
    id: "",
    contents: "",
    isNew: false,
    board: {
      id: "",
      title: "",
    },
  },
});

export const onClickState = atom({
  key: "onClickState",
  default: false,
});

export const modalInputState = atom({
  key: "modalInputState",
  default: "",
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
  default: dayjs("2014-08-18T12:00:00"),
});
export const openValue = atom({
  key: `openState/${v1()}`,
  default: false,
});
