import React from "react";
import GoogleMapReact from "google-map-react";
// import axios from "axios";
import artImageXS from "./art_images/art_xs.png";
import artImageS from "./art_images/art_s.png";
import artImageM from "./art_images/art_m.png";
import MapMarker from "./MapMarker";

const defaultOptions = {
  defaultCenter: { lat: 40.727505, lng: -73.969217 },
  defaultZoom: 13
};

class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mapOptions: defaultOptions,
      arts: [],
      selectedArtId: null,
      currentCenter: defaultOptions.defaultCenter
    };
  }





  onArtClick = art => {
    console.log("clicked on: ", art);
    this.props.onArtClick(art);
    this.setState({ selectedArtId: art.unique_key });
  };

  getNewCenter = results => {
    console.log(results)
    if (results.length === 0) {
      return this.state.center
    }
    let lats = results.map((art) => {

      return art.the_geom.coordinates[1]
    })
    let lngs = results.map((art) => {
      return art.the_geom.coordinates[0]
    })

    let minLat = Math.min(...lats)
    let maxLat = Math.max(...lats)
    let minLng = Math.min(...lngs)
    let maxLng = Math.max(...lngs)

    let newLat = (minLat + maxLat) / 2
    let newLng = (minLng + maxLng) / 2
    return { lat: newLat, lng: newLng }
  }

  render() {
    const { mapOptions, selectedArtId } = this.state;
    const { zoom } = mapOptions;
    console.log("In MAPS: ", this.state.selectedArtId)
    this.state.currentCenter = this.getNewCenter(this.props.resultArr)
    console.log(this.state.center)
    const image = zoom >= 16 ? artImageM : zoom >= 14 ? artImageS : artImageXS;
    return (
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyDb6zW26qmHqJJyXuZRigtknsqzWc3oVuU&v=3.31"
        }}
        options={this.createMapOptions}
        onChange={this.onMapChange}
        {...defaultOptions}
        {...mapOptions}
        center={this.state.currentCenter}
      >
        {this.props.resultArr.map(art => (
          <MapMarker
            art={art}
            image={image}
            selected={art.unique_key === selectedArtId}
            onArtClick={this.onArtClick}
            key={art.unique_key}
            lat={art.the_geom.coordinates[1]}
            lng={art.the_geom.coordinates[0]}
          />
        ))}
      </GoogleMapReact>
    );
  }
}

export default Map;
