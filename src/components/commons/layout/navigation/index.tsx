import { gql, useApolloClient, useMutation, useQuery } from "@apollo/client";

import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { getUserInfo } from "../../../../commons/function/getUserInfo";
import { IMutation } from "../../../../commons/types/generated/types";

import { accessTokenState, logoutState } from "../../store";
import { LOGOUT } from "../layout.queries";
import {
  FETCH_NOTIFICATIONS,
  UPDATE_NOTIFICATIONS,
} from "./navigation.queries";

import { useEffect, useState } from "react";
import NavigationUI from "./navigation.presenter";

export default function LayoutNavigation() {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [isLogout, setIsLogout] = useRecoilState(logoutState);

  const [notificationState, setNotificationState] = useState(false);

  const [popover, setPopover] = useState(false);

  const router = useRouter();

  const [logout] = useMutation<Pick<IMutation, "logout">>(LOGOUT);

  const onClickMoveToPage = (event: string) => () => {
    router.push(event);
  };

  const { data: notification } = useQuery(FETCH_NOTIFICATIONS);
  useEffect(() => {
    if (notification?.fetchNotifications.length === 0) return;
    setNotificationState(notification?.fetchNotifications[0].isNew);
  });

  const [updateNotifications] = useMutation(UPDATE_NOTIFICATIONS);

  const onClickLogout = async () => {
    try {
      const result = await logout();

      if (result) {
        setAccessToken(" ");
        setIsLogout(true);
        router.push("/main");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const onClickBadge = async () => {
    setPopover(!popover);
    const result = await updateNotifications();
    console.log(result);
  };

  return (
    <NavigationUI
      onClickBadge={onClickBadge}
      onClickLogout={onClickLogout}
      onClickMoveToPage={onClickMoveToPage}
      notification={notification?.fetchNotifications}
      popover={popover}
      notificationState={notificationState}
    />
  );
}
