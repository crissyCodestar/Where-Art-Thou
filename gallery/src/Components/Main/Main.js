import React, { Component } from 'react';
import './Main.css';
import { Route, Link, Switch } from "react-router-dom";
import axios from "axios";
import Galleries from "../Galleries/Galleries";

import { GoogleApiWrapper } from 'google-maps-react'
import Map from '../Map/Map'
import MapInfo from "../Map/MapInfo";

import './Main.css';



class Main extends Component {
    constructor() {
        super();
        this.state = {
            zipcode: "",
            resultArr: [],
            selectedArt: null,
            arts:[]
        }
    }


    handleChange = (e) => {
        this.setState({
            zipcode: e.target.value
        })
    }


      componentDidMount() {
        axios
          .get(
            "https://data.cityofnewyork.us/resource/43hw-uvdj.json?"+
              "&$limit=6"
          )
          .then(res => {
            console.log(res.data.unique_key)
            this.setState({
              arts: res.data
            });
          })
          .catch(err => {
            console.log("error fetching arts");
          });
      }

      onMapChange = options => {
        this.setState({
          mapOptions: options
        });
      };


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
      console.log(this.state.arts)

    console.log(this.state.selectedArt)
    const { selectedArt } = this.state;
        return(

            <div>
                <div>
                    <input
                        type="text"
                        id="searchBar"
                        placeholder="Search by Zip Code"
                        onChange={this.handleChange}
                    />
                </div>
                <button
                    id="submit"
                    onClick={this.handleSubmit}>Where ART Thou?
                </button>

                <div id="homePage">
                    <div id="results">
                    <Galleries
                    resultArr={this.state.resultArr}
                    onArtClick={this.onArtClick} />
                </div>
                    <div id="address">
                        {selectedArt ? MapInfo(selectedArt) : <p><strong> Gallery </strong></p>}
                    </div>
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
                  {selectedArt ? MapInfo(selectedArt) : null }
                </div>
                </div>

            </div>
        )
    }
}

//
// const Featured=(arts)=>{
//   console.log(this.props)
//
//   return(
//     <div>
//
//       <div>
//       {arts.name}
//       </div>
//
//     </div>
//   )
// }

export default Main;
