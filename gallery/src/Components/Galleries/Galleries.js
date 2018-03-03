import React, { Component } from 'react';


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
                    <li key={i}>
                     {el.name} - {el.address1} 
                     </li>
                ))}
                </ul>
            </div>
        )
    }
}

export default Galleries;