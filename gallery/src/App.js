import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { Route, Link, Switch } from "react-router-dom";
import Main from "./Components/Main/Main";
import About from "./Components/About/About";


class App extends Component {

  render() {
    return (
      <div>
        <div>
          <h1>Art deCode</h1>
          <div id="navbar">
            <Link to="/">Home</Link> {"  "}
            <Link to="/about">About</Link> {"  "}
          </div>

          <Route exact path="/" component={Main} />
          <Route path="/about" component={About} />

   </div>
      </div>
    );
  }
}

export default App;
