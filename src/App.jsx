import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { Grid } from "@mui/material";
import { getPlacesData } from "./api/api";

export const App = () => {
  //api call needs map bounds
  //corners of map determine bounds
  const [bounds, setBounds] = useState({});
  // coords will determine center of map
  const [coords, setCoords] = useState(
    // {
    // lat: 26.446926344396914,
    // lng: -72.30633658306435,
    // }
  );
  const [places, setPlaces] = useState([]);
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [cardClicked, setCardClicked] = useState(null);
  const [filteredPlaces, setFilteredPlaces] = useState([])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      // (thing=> console.log(thing))
      ({ coords: { latitude, longitude } }) => {
        setCoords({
          lat: latitude,
          lng: longitude,
        });
      }
    );
  }, []);

  useEffect(()=> {
      const placesByRating = places.filter(place => Number(place.rating) > rating)
      setPlaces(placesByRating)
  }, [rating])

  useEffect(() => {
    // console.log("bounds from parent", bounds)
    // console.log("coords from parent", coords)
    if (bounds.sw && bounds.ne) {
      setIsLoading(true);
      getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        setPlaces(data?.filter((place)=> place.name && place.num_reviews > 0));
        // console.log(places);
        setFilteredPlaces([])
        setIsLoading(false);
      });
    }
    
  }, [bounds, type]);

  return (
    <div className="main">
      <Header setCoords={setCoords}/>
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item md={4}>
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            isLoading={isLoading}
            cardClicked={cardClicked}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid
          item
          md={8}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Map
            coords={coords}
            setCoords={setCoords}
            bounds={bounds}
            setBounds={setBounds}
            places = {places}
            setCardClicked={setCardClicked}
          />
        </Grid>
      </Grid>
    </div>
  );
};
