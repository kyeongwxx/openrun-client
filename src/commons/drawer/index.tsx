import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import MenuIcon from "@mui/icons-material/Menu";
import ListIcon from "@mui/icons-material/List";
import CreateIcon from "@mui/icons-material/Create";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter } from "next/router";
import { Fragment, KeyboardEvent, MouseEvent, useState } from "react";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

type Anchor = "top" | "left" | "bottom" | "right";

export default function TemporaryDrawer(props) {
  const router = useRouter();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) => (event: KeyboardEvent | MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };
  // 로그인 로그아웃 찜 고객센터 / list, post

  const onClickMoveToPage = (event: string) => () => {
    router.push(event);
  };
  const addressBeforeSignIn = ["/signIn/", "/signUp/"];
  const addressMenu = ["/board/", "/board/new/"];
  const addressAfterSignIn = ["/myPage/", "/board/new/"];

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {!props.userInfo ? (
        <List>
          {["SIGN IN", "SIGN UP"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                style={{ cursor: "pointer" }}
                onClick={onClickMoveToPage(addressBeforeSignIn[index])}
              >
                <ListItemIcon>
                  {index % 2 === 0 ? <LoginIcon /> : <PersonAddIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      ) : (
        <List>
          {[props.userInfo?.nickName, "SIGN OUT"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                style={{ cursor: "pointer" }}
                onClick={
                  index === 0
                    ? onClickMoveToPage(addressAfterSignIn[index])
                    : props.onClickLogout
                }
              >
                <ListItemIcon>
                  {index % 2 === 0 ? (
                    <SentimentSatisfiedAltIcon />
                  ) : (
                    <LogoutIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )}

      <Divider />
      <List>
        {["LIST", "POST"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              style={{ cursor: "pointer" }}
              onClick={onClickMoveToPage(addressMenu[index])}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <ListIcon /> : <CreateIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Fragment>
        <Button onClick={toggleDrawer("left", true)}>
          <MenuIcon style={{ color: "#333" }} />
        </Button>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </Fragment>
    </div>
  );
}
