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
            <div id="galleryList">
                <div>
                {resultArr.map ((el, i) => (
                    <p id="renderedGallery" key={i}> {el.name} {el.the_geom.coordinates} 
                        <a target="_blank" rel="nofollow" href={el.url}>{el.url}</a> 
                    </p>
                ))}
                </div>
            </div>
        )
    }
}

export default Galleries;