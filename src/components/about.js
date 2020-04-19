import React, { Component, Router, Progress } from "react";
import NavBar from "../contents/nav";
import { Image, ProgressBar } from "react-bootstrap";
import "../App.css";
import Footer from './footer'
import photo from "../profile.jpg";
import Bar from "./bar";

{
  /*class About extends Component { 
    render() {*/
}
function About() {
  const now = 60;

  const progressInstance = <ProgressBar now={now} label={`${now}%`} srOnly />;

  return (
    <div>
      <section id="about">
        <NavBar />
        <h2 className="pageHeaders" style={{paddingLeft: "20px"}}>About Me</h2>
        <div className="about-page">
          <div style={{ width: "45%", padding: "5px" }}>
            <Image
              width={171}
              height={180}
              src={photo}
              roundedCircle
              rounded="true"
              style={{
                borderRadius: "125px",
                borderStyle: "outset",
                display: "block",
                margin: "auto",
              }}
            />

            <p>
              Hi! My name is Rekha I am a very enthusiastic learner Adaptable
              individual with an ability to work independently.
              <br />
              Dynamic and motivated professional with a proven record in making
              critical decisions during challenges.
              <br />
              Dependable and organized team player with the ability to
              communicate effectively and efficiently. Skilled at building
              relationships with employees across all levels of an organization.
              <br />I enjoy little things in life. I am a great movie buff. I
              enjoy taking part in community services like Fundraising and Food
              drives.
            </p>
          </div>
          <div className="techData" style={{ padding: "5px" }}>
              <div style={{width: "55%", color: "#fff", background: "#4ca9c7", margin: "3px"}} >&nbsp;&nbsp;&nbsp;CSS:&nbsp;&nbsp;&nbsp;&nbsp;65%</div>
              
              <div style={{width: "65%", color: "#fff", background: "#354b9c", margin: "3px"}} >&nbsp;&nbsp;&nbsp;HTML:&nbsp;&nbsp;&nbsp;&nbsp;75%</div>
              <div style={{width: "55%", color: "#fff", background: "#b44cc7", margin: "3px"}} >&nbsp;&nbsp;&nbsp;Javascript:&nbsp;&nbsp;&nbsp;&nbsp;85%</div>
              <div style={{width: "80%", color: "#fff", background: "#c79b4c", margin: "3px"}} >&nbsp;&nbsp;&nbsp;NodeJS:&nbsp;&nbsp;&nbsp;&nbsp;80%</div>
              <div style={{width: "80%", color: "#fff", background: "#c74c74", margin: "3px"}} >&nbsp;&nbsp;&nbsp;Express:&nbsp;&nbsp;&nbsp;&nbsp;80%</div>
              <div style={{width: "60%", color: "#fff", background: "#c7854c", margin: "3px"}} >&nbsp;&nbsp;&nbsp;React:&nbsp;&nbsp;&nbsp;&nbsp;60%</div>
              <div style={{width: "65%", color: "#fff", background: "#354b9c", margin: "3px"}} >&nbsp;&nbsp;&nbsp;MySQL/ORM:&nbsp;&nbsp;&nbsp;&nbsp;65%</div>
              <div style={{width: "50%", color: "#fff", background: "#4cc761", margin: "3px"}} >&nbsp;&nbsp;&nbsp;Mongo:&nbsp;&nbsp;&nbsp;&nbsp;50%</div>
          </div>
        </div>
        <Footer/>
        </section>
        
    </div>
    
  );
}

export default About;
