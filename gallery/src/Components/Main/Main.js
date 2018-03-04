import React, { Component } from 'react';
//import './Main.css';
import { Route, Link, Switch } from "react-router-dom";
import axios from "axios";
import Galleries from "../Galleries/Galleries";
import { GoogleApiWrapper } from 'google-maps-react'
import Map from '../Map/Map'
import MapInfo from "../Map/MapInfo";

import './Main.css';
class Main extends Component{
    constructor(){
        super();
        this.state={
            zipcode: "",
            resultArr: [],
             selectedArt: null
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
          console.log(res.data)

          this.setState({
            resultArr: res.data
          });
        })
        .catch(err => {
          console.log("error fetching galleries");
        });
    }

    onArtClick = art => {
      this.setState({ selectedArt: art });
    };

    render(){
      console.log(this.state.selectedArt)
const { selectedArt } = this.state;
        return(
            <div>

                Search By Zip Code:
                <input type="text" id="searchbar" onChange={this.handleChange}/>
                <button id="submit" onClick={this.handleSubmit}>Submit</button>
                <Galleries resultArr={this.state.resultArr}/>
              <div className="Map">
                <Map
                  google={this.props.google}
                  onArtClick={this.onArtClick}
                  containerElement={<div style={{ height: `100%` }} />}
                  mapElement={<div style={{ height: `100%` }} />}
                  resultArr={this.state.resultArr}
                  />
                </div>
                <div>
                  {selectedArt ? MapInfo(selectedArt) : <strong> Gallery </strong>}
                </div>
            </div>
        )
    }
}

export default Main;
