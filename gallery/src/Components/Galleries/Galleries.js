import React, { Component } from 'react';
//import './Main.css';
import { Route, Link, Switch } from "react-router-dom"; 
import axios from "axios";



class Galleries extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {resultArr} = this.props;
        return(
            <div>
                <ul>
                {resultArr.map ((el, i) => (
                    <li key={i}> {el.name} {el.the_geom.coordinates} {el.url} </li>
                ))}
                </ul>
            </div>
        )
    }
}

export default Galleries;