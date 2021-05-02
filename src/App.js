import { useState } from "react";
import { Button } from "@material-ui/core";
import Header from "./components/Header";
import ModalDialog from "./components/ModalDialog";
import Posts from "./components/Posts";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Header} exact />
        <Route path="/posts" component={Posts} exact />
        <Route path="/login" component={Login} exact />

        <Posts />
      </Switch>
    </div>
  );
};

export default App;
