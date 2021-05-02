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
    setColor(!color)
    setFilteredData(newList);  }
  return (
    <>
      <Typography variant="h4" component="h4">
        h1. Heading
      </Typography>
      {filteredData.map((value) => {
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
              <IconButton aria-label="add to favorites"  onClick={() => handleToggleComplete(value.id)} >

                  <FavoriteIcon style={{
                    fill: value.color
                        ? 'red'
                        : 'gray'}}/>
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
