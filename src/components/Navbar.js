import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  link: {
    marginLeft: theme.spacing(5),
  },

  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="absolute">
        <Container>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Content Ideas
            </Typography>
            <Link
              to="/"
              style={{ color: "#FFF", textDecoration: "none" }}
              className={classes.link}
            >
              Home
            </Link>
            <Link
              to="/posts"
              style={{ color: "#FFF", textDecoration: "none" }}
              className={classes.link}
            >
              Posts
            </Link>
            <Link
              to="/about"
              style={{ color: "#FFF", textDecoration: "none" }}
              className={classes.link}
            >
              About{" "}
            </Link>

            <Link
              to="/contact"
              style={{ color: "#FFF", textDecoration: "none" }}
              className={classes.link}
            >
              Contact{" "}
            </Link>
            <Link
              to="/logout"
              style={{ color: "#FFF", textDecoration: "none" }}
              className={classes.link}
            >
              Log out
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
