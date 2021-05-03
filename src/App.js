import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import Posts from "./components/Posts";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Logout from "./components/Logout";
import Contact from "./components/Contact";

const App = () => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  const history = useHistory();
  useEffect(() => {
    setIsUserAuthenticated(isUserAuthenticated);
    history.push("/login");
  }, [isUserAuthenticated, history]);
  return (
    <div className="App">
      {window.location.pathname === "/login" ? <Header /> : <Navbar />}
      <Switch>
        <Route path="/login" component={Login} exact />
        <Route path="/" component={Home} exact />
        <Route path="/posts" component={Posts} exact />
        <Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/logout" component={Logout} exact />
      </Switch>
      <Footer />
    </div>
  );
};

export default withRouter(App);
