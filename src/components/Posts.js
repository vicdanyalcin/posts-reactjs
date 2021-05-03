import React, { useState, useEffect } from "react";

import axios from "axios";
import {
  Button,
  IconButton,
  Typography,
  TextField,
  Container,
  Grid,
  makeStyles,
  Paper,
  Avatar,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    margin: `${theme.spacing(29)}px auto`,
    padding: theme.spacing(0, 7),
  },
  paper: {
    maxWidth: 800,
    margin: `${theme.spacing(1)}px auto`,
    paddingTop: 14.5,
    paddingBottom: 14.5,
  },
  fullHeightButton: {
    height: "100%",
  },
  textField: {
    width: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    color: "white",
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: 500,
    padding: theme.spacing(5),
  },
}));
export default function Posts() {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);
  const [color, setColor] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response.data);
        setAllData(response.data);
        setFilteredData(response.data);
      })
      .catch((error) => {
        console.log("Error getting fake data: " + error);
      });
  }, []);

  const like = () => {
    setColor(!color);
  };
  function handleToggleComplete(id) {
    console.log(id);
    const newList = filteredData.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          color: !color,
        };

        return updatedItem;
      }

      return item;
    });
    setColor(!color);
    setFilteredData(newList);
  }
  return (
    <>
      <div className={classes.root}>
        <Grid item zeroMinWidth spacing={5}>
          <Container>
            <Typography variant="h6" component="h6">
              Add post
            </Typography>
          </Container>
          {filteredData.map((value) => {
            return (
              <Paper key={value.id} className={classes.paper}>
                <Grid container wrap="nowrap" spacing={5}>
                  <Grid item>
                    <Avatar>{value.userId}</Avatar>
                  </Grid>
                  <Grid item xs zeroMinWidth>
                    <Typography noWrap> {value.title}</Typography>
                  </Grid>
                  <Grid item xs zeroMinWidth>
                    <IconButton
                      aria-label="add to favorites"
                      onClick={() => handleToggleComplete(value.id)}
                    >
                      <FavoriteIcon
                        style={{
                          fill: value.color ? "red" : "gray",
                        }}
                      />
                    </IconButton>
                  </Grid>
                </Grid>
              </Paper>
            );
          })}
        </Grid>
      </div>
    </>
  );
}
