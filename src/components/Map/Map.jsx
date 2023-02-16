import React, { useState } from "react";
import GoogleMapReact from "google-map-react";

export default function Map({coords, setCoords, setBounds}) {
  const key = process.env.REACT_APP_GOOGLE_MAPS_KEY;
  
  const defaultProps = {
    center: {
      lat: 39.1440,
      lng: -77.2016,
    },
    zoom: 6,
  };


  return (
    <div className="map-container" style={{height: '85vh', width: '70%'}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key }}
        defaultCenter={defaultProps.center} //this will be user's current location from browswer
        defaultZoom={defaultProps.zoom}
        center={defaultProps.center} //{coords}
        options={''}
        onChange={ (e) => { 
          console.log('center', e.center)
          setCoords(e.center)
          setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})} 
        }
      >
        <div className="marker-container"></div>
      </GoogleMapReact>
    </div>
  );

  // //set center coords to new center
  // //need sw longlat and ne longlat
  // function handleMapChange(e){
  //   console.log(e)
  //   const bounds = {
  //     ne: e.marginBounds.ne,
  //     sw: e.marginBounds.sw
  //   }
  //   console.log({bounds})
  //   setBounds(bounds)
  //   setCoords(e.center)
  // }

}
