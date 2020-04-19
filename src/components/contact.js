import React, { Component } from "react";
import {Card} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import NavBar from '../contents/nav'
import '../App.css'

import {
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import Footer from "./footer";
library.add(faFilePdf);
class Contact extends Component {
  render() {
    return (
        <div>
        <NavBar/>
      <div className="contact-page" style={{padding: "15px"}}>
      <h2 className="pageHeaders">Contact Me</h2>  
        <Card style={{ width: '40%', lineHeight: '80px' }}>
            <Card.Body>
                <Card.Title><h3>Let's build something awesome!!</h3></Card.Title>
                <Card.Text>
                <div>Want to know more about me. Please visit my profile @ <FontAwesomeIcon icon={faLinkedin} size="2x" color="#0077b5"/></div>
                <div>Checkout my work @ <FontAwesomeIcon icon={faGithub} size="2x" /></div>
                <div>Checkout my bio @ <FontAwesomeIcon icon={faFilePdf} size="2x" color="#cf1b21"/></div>  
                <div>Email me @ <a href="mailto:rnmadalli@gmail.com">rnmadalli@gmail.com</a></div>
                </Card.Text>
                </Card.Body>
        </Card>
      </div>
      <Footer/>
      </div>
    );
  }
}

export default Contact;
