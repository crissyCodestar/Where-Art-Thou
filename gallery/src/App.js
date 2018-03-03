import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { Route, Link, Switch } from "react-router-dom";
import Main from "./Components/Main/Main"


class App extends Component {
  homepage = () => {
    return <h1 id="maintitle"> Art De(Code) </h1>
  }
  render() {
    return (
      <div>
        <div>
          <Link to="/">Home</Link> {"  "}
          <Link to="/about">About</Link> {"  "}
        </div>
        <Route path="/" component={Main} />
        {/*<Route path="/about" component={About} />*/}
      </div>
    );
  }
}

export default App;
