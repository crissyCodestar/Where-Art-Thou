import React from "react";
import "./Map.css";

const MapMarker = ({ art, image, onArtClick, selected }) => (
  <img
    className="art"
    alt=""
    src={image}
    onClick={() => onArtClick(art)}
  />
);

export default MapMarker;
