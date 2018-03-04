import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { Route, Link, Switch } from "react-router-dom";
import Main from "./Components/Main/Main";
import About from "./Components/About/About";
import headerImg from "./pics/pexels-photo-110818.jpg";

class App extends Component {

  

  render() {
    return (
      <div>
        <div>
          <div id="headerImgDiv"><img id="headerImg" src={headerImg} alt="header image"/> </div>
          <div id="navbar">
            <Link to="/">Home</Link> {"  "}
            <Link to="/about">About</Link> {"  "}
          </div>
          <h1>Where ART Thou</h1>
          <Route exact path="/" component={Main} />
          <Route path="/about" component={About} />
          <footer id="footer"><p id="thanks"><strong>Thank You For Visitng</strong></p></footer>
        </div>
      </div>
    );
  }
}

export default App;
