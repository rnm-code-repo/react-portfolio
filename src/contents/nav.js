import React, { Component } from "react";
import "./style.css";
import {Nav } from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
class Navbar extends Component {
  render() {
    return(
      <Nav className="empNav" activeKey="/home">
        <NavLink to="/about" id="_about" exact activeClassName='active'>ABOUT</NavLink>
        <NavLink to="/portfolio" exact activeClassName='active'>PORTFOLIO</NavLink>
        <NavLink to="/contact" exact activeClassName='active'>CONTACT</NavLink>
      </Nav>
    )
  }
}

export default Navbar;
