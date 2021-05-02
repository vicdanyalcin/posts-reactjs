import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import ModalDialog from "./ModalDialog";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const history = useHistory();

  // function to handle modal close
  const handleClose = () => {
    setOpen(false);
    history.push("/");
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Login
      </Button>
      <ModalDialog open={open} handleClose={handleClose} />
    </>
  );
};

export default withRouter(Login);
