import * as React from "react";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useRecoilState } from "recoil";
import { openValue } from "../../components/commons/store";
import { createTheme } from "@mui/material/styles";

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
    width: 500,
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <s.Box2 sx={style}>
          <s.NavBar
            sx={{
              backgroundImage: "linear-gradient(270deg, #2f88e5, #5920d3)",
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
          <Button onClick={handleClose}>확인</Button>
        </s.Box2>
      </Modal>
    </div>
  );
}
