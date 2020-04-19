import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

import React from "react";
import { ProgressBar } from "react-bootstrap";

export default class Bar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pct: 60,
    };
  }
  render() {
    return (
      <div>
        <ProgressBar class="right" now={this.state.pct} />
      </div>
    );
  }
}
