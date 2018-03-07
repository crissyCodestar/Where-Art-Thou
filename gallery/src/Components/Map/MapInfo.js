
import React from "react";
import './Map.css'

const MapInfo = art => {
console.log(art)
  return (
    <div className="galleryInfo">
    <h3>{art.name}</h3>
    <p>{art.address1}</p>
       <p>{art.city}, NY </p>
        <p>{art.tel}</p>
<a className="artsite" rel="unfollow" target="_blank" href={art.url}>Visit {art.name}</a>
    </div>
  );
};

export default MapInfo;
