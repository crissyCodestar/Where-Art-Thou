
import React from "react";


const MapInfo = art => {

  return (
    <div>
    <p id="galleryName"><strong>{art.name}</strong></p> <br />
    {art.address1} <br />
    {art.city} <br />
    {art.tel}
    </div>
  );
};

export default MapInfo;
