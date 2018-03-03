import React, { Component } from 'react';

import {Map, InfoWindow, Marker,GoogleMapReact, GoogleApiWrapper} from 'google-maps-react';

const defaultOptions = {
defaultCenter: { lat: 40.7128, lng: -73.9 },
defaultZoom: 12
};

class Map extends Component{
constructor(){
  super()
  this.state ={
     mapOptions: defaultOptions
  }
}
  render(){

    return(
      <GoogleMapReact
       bootstrapURLKeys={{
         key: "AIzaSyDb6zW26qmHqJJyXuZRigtknsqzWc3oVuU"
       }}
       onChange={this.onMapChange}
       {...defaultOptions}
       {...mapOptions}
     >


    </GoogleMapReact>
    )
  }
}

export default Map;
