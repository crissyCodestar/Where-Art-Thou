
import React from "react";
import './Map.css'

const MapInfo = art => {
console.log(art)
  return (
<<<<<<< HEAD
    <div>
    <p id="galleryName"><strong>{art.name}</strong></p> <br />
    {art.address1} <br />
    {art.city} <br />
    {art.tel}
=======
    <div className="galleryInfo">
    <h3>{art.name}</h3>
    <p>{art.address1}</p>
       <p>{art.city}, NY </p>
        <p>{art.tel}</p>
<a className="artsite" rel="unfollow" target="_blank" href={art.url}>Visit {art.name}</a>
>>>>>>> 310b76f730ad6ed58b7ca299f2c795a8bad6fc7e
    </div>
  );
};

export default MapInfo;
