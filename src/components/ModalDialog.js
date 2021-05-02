import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Form from "./Form";

const ModalDialog = ({
  open,
  handleClose,
  disableEscapeKeyDown,
  disableBackdropClick,
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      disableEscapeKeyDown={disableEscapeKeyDown}
      disableBackdropClick={disableBackdropClick}
    >
      <Form handleClose={handleClose} />
    </Dialog>
  );
};

export default ModalDialog;
