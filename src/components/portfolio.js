import React, { Component } from "react";
import { CardGroup, Card, CardDeck } from "react-bootstrap";
import burger from "../burger.png";
import cookout from "../Cookout.png";
import fintrack from "../FinTrack.png";
import weather from "../Weather.png";
import notetaker from "../NoteTaker.png";
import empdir from "../empDir.png";
import NavBar from "../contents/nav";
import "../App.css";
import Footer from "./footer";

function onHover(e) {
  e.target.style.background = "#61dafb";
  e.target.style.textDecoration = "none";
  e.target.style.color = "#ffffff";
}

function resetColor(e) {
  e.target.style.background = "#282c34";
  e.target.style.color = "#61dafb";
}

class Portfolio extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="projects">
          <h2 className="pageHeaders">My Portfolio</h2>
          
          <CardDeck>
            <Card>
              <Card.Img variant="top" src={burger} />
              <Card.Body>
                <Card.Title>
                  <div className="extLink">
                    <a
                      href="https://limitless-wildwood-71279.herokuapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseOver={onHover}
                      onMouseOut={resetColor}
                    >
                      Visit Site
                    </a>
                  </div>
                  NodeJS/Express
                  <div className="gitLink">
                    <a
                      href="https://github.com/rnm-code-repo/Best--Burgers"
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseOver={onHover}
                      onMouseOut={resetColor}
                    >
                      Git Repo
                    </a>
                  </div>
                </Card.Title>
                <Card.Text>
                  <br />
                  This applicaiton shows an order processing system for
                  restaurant. Allows user to place order, and restaurant to
                  process the order in queue.
                  <br />
                  Application showcases NodeJS/Express, Handlebar and ORM in
                  action.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={cookout} />
              <Card.Body>
                <Card.Title>
                  <div className="extLink">
                    <a
                      href="https://smaji08.github.io/CookOut/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseOver={onHover}
                      onMouseOut={resetColor}
                    >
                      Visit Site
                    </a>
                  </div>
                  NodeJS/Express
                  <div className="gitLink">
                    <a
                      href="https://github.com/smaji08/CookOut"
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseOver={onHover}
                      onMouseOut={resetColor}
                    >
                      Git Repo
                    </a>
                  </div>
                </Card.Title>
                <Card.Text>
                  <br />
                  CookOut was built using the Foundation front-end framework
                  node Sass for compiling and auto prefixing our css node
                  browser-sync so we could see our css changes in real time node
                  gulp to run node sass and browswer-sync from the command line
                  API calls to Zomato for restaurants, mealDB for recipe, and
                  Bing for location data.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={fintrack} />
              <Card.Body>
                <Card.Title>
                  <div className="extLink">
                    <a
                      href="https://serene-scrubland-32480.herokuapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseOver={onHover}
                      onMouseOut={resetColor}
                    >
                      Visit Site
                    </a>
                  </div>
                  NodeJS/Express
                  <div className="gitLink">
                    <a
                      href="https://github.com/zvlu/FinTRack"
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseOver={onHover}
                      onMouseOut={resetColor}
                    >
                      Git Repo
                    </a>
                  </div>
                </Card.Title>
                <Card.Text>
                  <br />
                  FinTrack is built using HTML/CSS, Frontend Framework
                  Bootstrap, NodeJS/Express, Mysql, Sequelize and JS library
                  Chart.js. Finnhub and Alpha Vantage api's.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
          <CardDeck>
            <Card>
              <Card.Img variant="top" src={weather} />
              <Card.Body>
                <Card.Title>
                  <div className="extLink">
                    <a
                      href="https://github.com/rnm-code-repo/Weather-Dashboard"
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseOver={onHover}
                      onMouseOut={resetColor}
                    >
                      Visit Site
                    </a>
                  </div>
                  NodeJS/Axios
                  <div className="gitLink">
                    <a
                      href="https://github.com/rnm-code-repo/Weather-Dashboard"
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseOver={onHover}
                      onMouseOut={resetColor}
                    >
                      Git Repo
                    </a>
                  </div>
                </Card.Title>
                <Card.Text>
                  <br />
                  Interactive applicaiton to show 5 day weather forecast for any
                  locaiton that user searches for. HTML/CSS with Bootstarp is
                  used for UI, Axios for API calls.
                  <br />
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={notetaker} />
              <Card.Body>
                <Card.Title>
                  <div className="extLink">
                    <a
                      href="https://peaceful-hollows-81016.herokuapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseOver={onHover}
                      onMouseOut={resetColor}
                    >
                      Visit Site
                    </a>
                  </div>
                  <div className="gitLink">
                    <a
                      href="https://github.com/rnm-code-repo/NoteTaker"
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseOver={onHover}
                      onMouseOut={resetColor}
                    >
                      Git Repo
                    </a>
                  </div>
                  Bootstrap/AJAX/ORM
                </Card.Title>
                <Card.Text>
                  <br />
                  This Node/Express JS application gives an overview of REST API
                  calls
                  <br />
                  GET - route - <code>/api/notes</code> Reads data from a JSON
                  file
                  <br />
                  POST - route - <code>/api/notes</code> Writes data coming from
                  form to a JSON file
                  <br />
                  DELETE - route - <code>/api/notes/:id</code> Delets data with
                  given id from JSON file
                  <br />
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={empdir} />
              <Card.Body>
                <Card.Title>
                  <div className="extLink">
                    <a
                      href="https://rnm-code-repo.github.io/Employee-Directory/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseOver={onHover}
                      onMouseOut={resetColor}
                    >
                      Visit Site
                    </a>
                  </div>
                  ReactJS/Bootstrap
                  <div className="gitLink">
                    <a
                      href="https://github.com/rnm-code-repo/Employee-Directory"
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseOver={onHover}
                      onMouseOut={resetColor}
                    >
                      Git Repo
                    </a>
                  </div>
                </Card.Title>
                <Card.Text>
                  <br />
                  React project to show employee data with sort and search
                  option.
                  <br />
                  Axios fetches data from a data provides in JSON format. This
                  data is represented in table format using React
                  JS/React-Bootstrap packages.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Portfolio;
