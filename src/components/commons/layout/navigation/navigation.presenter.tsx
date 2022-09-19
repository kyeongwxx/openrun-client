import { useRecoilState } from "recoil";
import { userInfoValue } from "../../store";
import * as s from "./navigation.styles";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LogoutIcon from "@mui/icons-material/Logout";
import { NotificationsNone } from "@mui/icons-material";
import { Badge, Popover } from "antd";
import { v4 as uuidv4 } from "uuid";
export default function NavigationUI(props: any) {
  const [userInfo, setUserInfo] = useRecoilState(userInfoValue);
  const content = (
    <div>
      {props.notification?.map((el: any) => (
        <p key={uuidv4()}>
          <span style={{ fontWeight: "700" }}> {el?.board.title}</span>
          <span> {el?.contents}</span>
        </p>
      ))}
    </div>
  );
  return (
    <s.Wrapper>
      <s.MenuWrapper>
        {!userInfo ? (
          <s.MenuList>
            <s.Menu onClick={props.onClickMoveToPage(`/signIn`)}>로그인</s.Menu>
            <s.Menu onClick={props.onClickMoveToPage(`/signUp`)}>
              회원가입
            </s.Menu>
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
              open={props.popover}
              content={content}
            >
              <s.Menu onClick={props.onClickBadge}>
                {props.notificationState ? (
                  <Badge
                    count={props.notification?.length}
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

            <s.Menu onClick={props.onClickMoveToPage(`/myPage/favoriteList`)}>
              <FavoriteBorderIcon style={{ fontSize: "16px" }} />
            </s.Menu>
            <s.Menu onClick={props.onClickLogout}>
              <LogoutIcon style={{ fontSize: "16px" }} />
            </s.Menu>
          </s.MenuList>
        )}
      </s.MenuWrapper>
    </s.Wrapper>
  );
}
