import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./about";
import Portfolio from "./portfolio";
import Contact from "./contact";
import Home from "./home";

function Main() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/react-portfolio" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default Main;
