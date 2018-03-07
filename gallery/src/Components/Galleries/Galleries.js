import React, { Component } from 'react';
import './Galleries.css'
import { Link, Route, Switch } from 'react-router-dom';


class Galleries extends Component {
    constructor(props) {
        super(props);
        this.state={
          selectedArtId: null
        }
    }

    render() {
        const { resultArr } = this.props;
        return (
            <div >
                <div id="galleryList">
                <p id="gallery"><strong>Gallery List</strong></p>
                    {resultArr.map((el, i) => (
                        <div id="render">
                            <p id="renderedGallery" key={i}> {el.name} - {el.address1}</p>
                        </div>
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
