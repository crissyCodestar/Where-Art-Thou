import React, { Component } from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import './Galleries.css'

class Galleries extends Component{
    constructor(props){
        super(props);
        this.state={
          selectedArtId: null
        }
    }


    onArtClick = art => {
      console.log("clicked on: ", art);
      this.props.onArtClick(art);
      this.setState({ selectedArtId: art.unique_key });
    };

    render(){
      console.log("In GALL: ",this.state.selectedArtId)
        const {resultArr} = this.props;
        return(
            <div >
                <div id="galleryList">
                {resultArr.map ((art) => (
                    <div> <p id="renderedGallery"
                      onClick={() => this.onArtClick(art)}>
                    {art.name} - {art.address1}
                    </p></div>
                ))}

                </div>
            </div>
        )
    }
}

export default Galleries;

// art={art}
// key={art.unique_key}
// selected={art.unique_key === this.state.selectedArtId}
//
// onArtClick={this.onArtClick}
