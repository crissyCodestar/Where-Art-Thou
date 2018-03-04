import React, { Component } from 'react';
import './Main.css';
import { Route, Link, Switch } from "react-router-dom";
import axios from "axios";
import Galleries from "../Galleries/Galleries";
import GoogleMap from "../Map/Map";


class Main extends Component {
    constructor() {
        super();
        this.state = {
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
        axios.get(
            `https://data.cityofnewyork.us/resource/43hw-uvdj.json?zip=${this.state.zipcode}`
        ).then(res => {
            this.setState({
                resultArr: res.data
            });
        }).catch(err => {
            console.log("error fetching galleries");
        });
    }

    render() {
        return (
            <div>
                <h1>Where ART Thou</h1>
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
                <label></label>
                <div>
                    <GoogleMap />
                    <Galleries resultArr={this.state.resultArr} />
                </div>
            
            </div>
        )
    }
}

export default Main;
