import React, { useState } from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom";
import ConfirmDialog from "./ConfirmDialog";
const Logout = () => {
  const [open, setOpen] = useState(true);

  const history = useHistory();

  const handleClose = () => {
    console.log(window.location.pathname);
    setOpen(false);

    history.push("/login");
  };
  return (
    <>
      <ConfirmDialog
        open={open}
        handleClose={handleClose}
        disableEscapeKeyDown={true}
        disableBackdropClick={true}
      />
    </>
  );
};

export default withRouter(Logout);
