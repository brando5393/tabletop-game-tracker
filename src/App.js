import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Tracker from "./components/pages/Tracker";
import Help from "./components/pages/Help";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

const App = () => {
  return (
    <div className="appBody">
      <Router>
        <Navbar />
        <Container className="mainContainer">
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
          <Switch>
            <Route exact path="/tracker" component={Tracker} />
          </Switch>
          <Switch>
            <Route exact path="/help" component={Help} />
          </Switch>
          <Switch>
            <Route exact path="/login" component={Login} />
          </Switch>
          <Switch>
            <Route exact path="/register" component={Register} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
};

export default App;
