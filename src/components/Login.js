import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import ModalDialog from "./ModalDialog";
import { useHistory } from "react-router-dom";
const Login = () => {
  const [open, setOpen] = useState(true);

  const history = useHistory();
  const handleClose = () => {
    setOpen(false);
    console.log(window.location.pathname);
    history.push("/");
    console.log(window.location.pathname);
  };
  return (
    <>
      <ModalDialog
        disableBackdropClick={true}
        disableEscapeKeyDown={true}
        open={open}
        handleClose={handleClose}
      />
    </>
  );
};

export default withRouter(Login);
