import React, {Component} from 'react';
import '../App.css';
import About from './about'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointDown } from '@fortawesome/free-solid-svg-icons'

function onHover(e) {
  e.target.style.background = '#61dafb';
  e.target.style.color = '#ffffff';
}

function resetColor(e) {
  e.target.style.background = 'none';
  e.target.style.color = '#61dafb';
}

function showAbout() {
  const anchor = document.querySelector('#about')
  anchor.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  const element = document.getElementById("_about");
  element.classList.add("active");
}

class Home extends Component {
  render() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <p className="Home">
          Hello, welcome to my world! <br/>
          I am Full-stack web developer. <br/>Avid learner with key interest in new development techniques
        </p>
        <div onMouseOver={onHover} onMouseOut={resetColor}
          className="App-link"
          onClick={showAbout}
        >
          View my portfolio <FontAwesomeIcon icon={faHandPointDown} />
        </div>
      </header>
      <About />
    </div>
  );
  }
}

export default Home;
