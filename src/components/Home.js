import React from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import { withRouter } from "react-router-dom";

const styles = () => ({
  root: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    color: "#000133",
    marginTop: "100px",
  },
});
const useStyles = makeStyles(styles);

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid>
          {" "}
          <div>
            <div class="col-lg-5">
              <h1 class="font-weight-light">Home</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div>
            <img src="http://placehold.it/600x300" alt="" />
          </div>
        </Grid>
      </Container>
    </div>
  );
};

export default withRouter(Home);
