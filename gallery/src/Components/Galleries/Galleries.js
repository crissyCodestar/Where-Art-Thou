import React, { Component } from 'react';


class Galleries extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {resultArr} = this.props;
        return(
            <div >
                <div id="galleryList">
                {resultArr.map ((el, i) => (
                    <p id="renderedGallery" key={i}> {el.name} - {el.address1} 
                    </p>
                ))}
                </div>
            </div>
        )
    }
}

export default Galleries;