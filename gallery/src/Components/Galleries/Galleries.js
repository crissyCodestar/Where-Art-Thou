import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';


class Galleries extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { resultArr } = this.props;
        return (
            <div >
                <div id="galleryList">
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