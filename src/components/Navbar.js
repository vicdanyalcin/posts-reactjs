import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import ConfirmDialog from "./ConfirmDialog";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();
  const handleConfirm = () => {
    return <ConfirmDialog />;
  };
  return (
    <div className={classes.root}>
      <AppBar position="absolute">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Link to="/" style={{ color: "#FFF" }}>
            Home
          </Link>
          <Link to="/posts" style={{ color: "#FFF" }}>
            Posts
          </Link>
          <Link to="/about" style={{ color: "#FFF" }}>
            About{" "}
          </Link>

          <Link to="/contact" style={{ color: "#FFF" }}>
            Contact{" "}
          </Link>
          <Link to="/login" style={{ color: "#FFF" }}>
            Log out{" "}
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
