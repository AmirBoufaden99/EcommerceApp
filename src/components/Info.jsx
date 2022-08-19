import React from "react";
import "../styles/Info.css";
import Map from "react-map-gl";

export default function Info() {

  return (
    <div className="InfoContainer">
      <div className="infoPara">
        <h1>Conatact us :</h1>
        <h4>Address :</h4>
        <p>8 Beechwood StreetColumbia, MD 21044</p>
        <h4>Phone Number :</h4>
        <p>+33 62 58 74 56</p>
      </div>
      <div className="infoMap">
        <Map
          initialViewState={{
            longitude: -100,
            latitude: 40,
            zoom: 3.5,
          }}
          style={{ width: 600, height: 400 }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        />
        ;
      </div>
    </div>
  );
}
