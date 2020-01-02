import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import Dashboard from "../Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </Router>
  );
}

export default App;
