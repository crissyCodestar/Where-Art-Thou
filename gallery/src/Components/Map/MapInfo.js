
import React from "react";


const MapInfo = art => {
console.log(art)
  return (
    <div>
    Gallery Name: {art.name} <br />
      Address: {art.address1} <br />
      City: {art.city} <br />
       Tele: {art.tel}<br />

    </div>
  );
};

export default MapInfo;
