import React from "react";
import GoogleMapReact from "google-map-react";
import axios from "axios";
import artImageXS from "./art_images/art_xs.png";
import artImageS from "./art_images/art_s.png";
import artImageM from "./art_images/art_m.png";
import MapMarker from "./MapMarker";

const defaultOptions = {
  defaultCenter: {lat:40.727505, lng:-73.969217},
  defaultZoom: 12
};

class Map extends React.Component {
  constructor(props){
    super(props)

  }

  state = {
    mapOptions: defaultOptions,
    arts: [],
    selectedArtId: null
  };

  shouldComponentUpdate(nextProps, nextState) {
    // Since this component does not depend on props, we only rerender when state changes
    // So we avoid unneeded renders when parent (App) component rerenders
    return this.state !== nextState;
  }

  componentDidMount() {
    // Get the 200 latest Art sightings
    axios
      .get(
        "https://data.cityofnewyork.us/resource/43hw-uvdj.json?"+
          "&$limit=200"
      )
      .then(res => {
        console.log(res.data.unique_key)
        this.setState({
          arts: res.data.filter(art => art.the_geom && art.the_geom.coordinates)
        });
      })
      .catch(err => {
        console.log("error fetching arts");
      });
  }

  onMapChange = options => {
    this.setState({
      mapOptions: options
    });
  };

  onArtClick = art => {
    console.log("clicked on: ", art);
    this.props.onArtClick(art);
    this.setState({ selectedArtId: art.unique_key });
  };

  render() {
    const { arts, mapOptions, selectedArtId } = this.state;
    const { zoom } = mapOptions;

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
      >
        {arts.map(art => (
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
