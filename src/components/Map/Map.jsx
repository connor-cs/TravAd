import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Paper, Typography, Rating } from "@mui/material";
import "./map.css";

export default function Map({ coords, setCoords, setBounds, places, setCardClicked }) {
  const key = process.env.REACT_APP_GOOGLE_MAPS_KEY;

  const defaultProps = {
    center: {
      lat: 39.144,
      lng: -77.2016,
    },
    zoom: 14,
  };

  return (
    <div className="map-container" style={{ height: "85vh", width: "70%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key }}
        defaultCenter={coords} //this will be user's current location from browswer
        defaultZoom={defaultProps.zoom}
        center={coords} //{coords}
        options={""}
        onChange={(e) => {
          console.log("center", e.center);
          setCoords(e.center);
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child)=> {
          setCardClicked(child)
        }}
      >
        {places?.map((place, idx) => (
          <div
            className="marker-container"
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={idx}
          >
            {
              <Paper elevation={3} className="card">
                <Typography
                  className="content"
                  variant="subtitle2"
                  gutterBottom
                >
                  {place.name}
                </Typography>
                <img
                  className="img"
                  src={
                    place.photo
                      ? place.photo.images.large.url
                      : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                  }
                  alt="restaurant image"
                />
                <Rating value={Number(place.rating)} size="small" readOnly/>
              </Paper>
            }
          </div>
        ))}
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
