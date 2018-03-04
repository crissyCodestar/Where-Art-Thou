
import React from "react";


const MapInfo = art => {

  return (
    <div>
    Gallery Name: {art.name} <br />
      Address: {art.address1} <br />
      City: {art.city} <br />
       Tele: {art.tel}
    </div>
  );
};

export default MapInfo;
