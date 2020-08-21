import React, { Component } from "react";
import Home from "./HomeComponent";
import Download from "./DownloadComponent";
import About from "./AboutComponent";
import Header from "./HeaderComponent";

import { Switch, Route, Redirect } from "react-router-dom";
class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/download" component={Download} />
          <Route path="/about" component={About} />
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

export default Main;
