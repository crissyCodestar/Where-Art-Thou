import React, { Component } from 'react';
//import './Main.css';
import { Route, Link, Switch } from "react-router-dom"; 
import axios from "axios";
import Galleries from "../Galleries/Galleries";


class Main extends Component{
    constructor(){
        super();
        this.state={
            zipcode: "",
            resultArr: []
        }
    }

    handleChange = (e) => {
        this.setState({
            zipcode: e.target.value
        })
    }

    handleSubmit = () => {
        axios
        .get(
          `https://data.cityofnewyork.us/resource/43hw-uvdj.json?zip=${this.state.zipcode}`
        )
        .then(res => {
          this.setState({
            resultArr: res.data
          });
        })
        .catch(err => {
          console.log("error fetching galleries");
        });
    }



    render(){

        return(
            <div> 
                Search By Zip Code:
                <input type="text" id="searchbar" onChange={this.handleChange}/>
                <button id="submit" onClick={this.handleSubmit}>Submit</button>
                <Galleries resultArr={this.state.resultArr}/>
            </div>
        )
    }
}

export default Main;