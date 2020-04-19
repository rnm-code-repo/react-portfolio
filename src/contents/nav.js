import React, { Component } from "react";
import "./style.css";
import {Nav } from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
class Navbar extends Component {
  render() {
    return(
      <Nav className="empNav" activeKey="/home">
        {/*<ul style={{display:"flex", listStyle: "none" }}>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/portfolio">PORTFOLIO</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
    </ul>*/}
        <NavLink to="/about" exact activeClassName='active'>ABOUT</NavLink>
        <NavLink to="/portfolio" exact activeClassName='active'>PORTFOLIO</NavLink>
        <NavLink to="/contact" exact activeClassName='active'>CONTACT</NavLink>
      </Nav>
    )
  }
}

export default Navbar;
