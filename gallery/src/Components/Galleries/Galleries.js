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

<<<<<<< HEAD
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
=======


    onArtClick = art => {
      console.log("clicked on: ", art);
      this.props.onArtClick(art);
      this.setState({ selectedArtId: art.unique_key });
    };

    render(){
      console.log("In GALL: ",this.state.selectedArtId)
        const {resultArr} = this.props;
        return(
            <div>
                <ol id="galleryList">
                {resultArr.map ((art) => (
                  <div id="divLi">
                    <li> <span className="link-title"
                      onClick={() => this.onArtClick(art)}>
                    {art.name}
                    </span><br />
                    <span className="link-excerpt">
                     {art.address1}
                    </span>
                    </li>
                    </div>
                ))}


                </ol>
>>>>>>> 310b76f730ad6ed58b7ca299f2c795a8bad6fc7e
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
