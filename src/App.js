import { useState } from "react";
import { Button } from "@material-ui/core";
import Header from "./components/Header";
import ModalDialog from "./components/ModalDialog";
import Posts from "./components/Posts";
const App = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  // function to handle modal close
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <Header />
      <Posts />
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Signup
      </Button>
      <ModalDialog open={open} handleClose={handleClose} />
    </div>
  );
};

export default App;
