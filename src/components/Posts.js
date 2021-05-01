import React, { useState, useEffect } from "react";

import axios from "axios";
import {
  Card,
  CardContent,
  List,
  ListItemText,
  CardMedia,
  CardActionArea,
  CardActions,
  Button,
  IconButton,
  Typography,
  colors,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
export default function Posts() {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);
  const [color, setColor] = useState(false);

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
  const handleSearch = (event) => {
    return null;
  };
  const like = () => {
    setColor(!color);
  };
  return (
    <>
      <Typography variant="h4" component="h4">
        h1. Heading
      </Typography>
      {filteredData.map((value, index) => {
        return (
          <Card key={value.id}>
            <CardActionArea>
              {/* <CardMedia
                style={{ height: 0, paddingTop: "3.25%" }}
                image={value.url}
              /> */}
              <CardContent>
                <List>
                  <ListItemText style={{ color: "blue" }}>
                    {value.userId}
                  </ListItemText>
                  <ListItemText style={{ color: "blue" }}>
                    {value.title}
                  </ListItemText>
                </List>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <IconButton aria-label="add to favorites" onClick={like}>
                {color ? (
                  <FavoriteIcon style={{ fill: "red" }} />
                ) : (
                  <FavoriteIcon />
                )}
              </IconButton>
              <IconButton aria-label="add to favorites">
                <ChatBubbleIcon />
              </IconButton>
            </CardActions>
          </Card>
        );
      })}
    </>
  );
}
