import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./about";
import Portfolio from "./portfolio";
import Contact from "./contact";
import HomePage from "./home";

/*class Main extends Component {
  render() {
    return (
      <div>
          <HomePage />
        
        
      </div>
    );
  }
}*/

function Main() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
          <Route exact={true} path="/about" component={About} />
          <Route exact={true} path="/portfolio" component={Portfolio} />
          <Route exact={true} path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default Main;
