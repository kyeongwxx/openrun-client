import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useRecoilState } from "recoil";
import { openValue } from "../../components/commons/store";
import { createTheme } from "@mui/material/styles";
import { TextField, Paper, AppBar, autocompleteClasses } from "@mui/material";
import styled from "@emotion/styled";
import { makeStyles } from "@mui/material";
import * as s from "./style";

export default function BasicModal(props) {
  //const [open, setOpen] = useState(false);
  const [open, setOpen] = useRecoilState(openValue);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const theme = createTheme({
    palette: {
      primary: { main: "#5920D3" },
    },
  });
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 920,
    bgcolor: "background.paper",
    border: "none",
    radius: "10px",
    boxShadow: 24,

    p: 6,
    title: {
      height: "20px",
      bgcolor: "#5920D3",
    },
  };

  return (
    <div>
      <Button onClick={handleOpen}>버튼</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <s.Box2 sx={style}>
          <s.NavBar
            sx={{
              backgroundColor: " #8661d5",
            }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {props.title}
            </Typography>
          </s.NavBar>

          <Typography
            id="modal-modal-description"
            sx={{ mt: 10, fontSize: 19 }}
          >
            {props.description}
          </Typography>
        </s.Box2>
      </Modal>
    </div>
  );
}
