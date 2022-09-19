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

import { userInfoValue } from "../../store";
import * as s from "./navigation.styles";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LogoutIcon from "@mui/icons-material/Logout";
import { NotificationsNone } from "@mui/icons-material";
import { Badge, Popover } from "antd";
import { v4 as uuidv4 } from "uuid";

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

  const [userInfo, setUserInfo] = useRecoilState(userInfoValue);

  const { data: notification } = useQuery(FETCH_NOTIFICATIONS);
  useEffect(() => {
    if (notification?.fetchNotifications.length === 0) return;
    setNotificationState(notification?.fetchNotifications[0].isNew);
  });

  const [updateNotifications] = useMutation(UPDATE_NOTIFICATIONS);

  const content = (
    <div>
      {notification?.fetchNotifications.map((el) => (
        <p key={uuidv4()}>
          <span style={{ fontWeight: "700" }}> {el?.board.title}</span>
          <span> {el?.contents}</span>
        </p>
      ))}
    </div>
  );

  const onClickLogout = async () => {
    try {
      const result = await logout();

      if (result) {
        // setAccessToken(" ");
        setIsLogout(true);
        location.replace(`/main`);
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
    <s.Wrapper>
      <s.MenuWrapper>
        {!userInfo ? (
          <s.MenuList>
            <s.Menu onClick={onClickMoveToPage(`/signIn`)}>로그인</s.Menu>
            <s.Menu onClick={onClickMoveToPage(`/signUp`)}>회원가입</s.Menu>
          </s.MenuList>
        ) : (
          <s.MenuList>
            <s.Menu
              onClick={() => {
                location.replace(`/myPage`);
              }}
            >
              {userInfo?.nickName}
            </s.Menu>

            <Popover
              title="알림"
              trigger="click"
              open={popover}
              content={content}
            >
              <s.Menu onClick={onClickBadge}>
                {notificationState ? (
                  <Badge
                    count={notification?.length}
                    color="#6400ff"
                    size="small"
                  >
                    <NotificationsNone style={{ fontSize: "16px" }} />
                  </Badge>
                ) : (
                  <NotificationsNone style={{ fontSize: "16px" }} />
                )}
              </s.Menu>
            </Popover>

            <s.Menu onClick={onClickMoveToPage(`/myPage/favoriteList`)}>
              <FavoriteBorderIcon style={{ fontSize: "16px" }} />
            </s.Menu>
            <s.Menu onClick={onClickLogout}>
              <LogoutIcon style={{ fontSize: "16px" }} />
            </s.Menu>
          </s.MenuList>
        )}
      </s.MenuWrapper>
    </s.Wrapper>
  );
}
