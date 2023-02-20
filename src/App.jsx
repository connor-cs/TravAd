import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { Grid } from "@mui/material";
import { getPlacesData } from "./api/api";

export const App = () => {
  //api call needs map bounds
  const [bounds, setBounds] = useState({
    "ne": {
      "lat": 45.81069796653989,
      "lng": -69.92865078125001
    },
    "sw": {
      "lat": 31.78081609123727,
      "lng": -84.47454921875001
    }
  });
  // coords will determine center of map
  const [coords, setCoords] = useState({ lat: 26.446926344396914, lng: -72.30633658306435 });
  const [places, setPlaces] = useState([])
  const [type, setType] = useState('restaurants')
  const [isLoading, setIsLoading] = useState(false)
  const [cardClicked, setCardClicked] = useState(null)



  useEffect(() => {
    // console.log("bounds from parent", bounds)
    // console.log("coords from parent", coords)

    setIsLoading(true)

    getPlacesData(type, bounds.sw, bounds.ne)
      .then(data => {
        setPlaces(data)
        console.log(places)
        setIsLoading(false)
      })
  }, [coords])

  return (
    <div className='main'>
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item md={4}>
          <List places={places} isLoading={isLoading} cardClicked={cardClicked} isLoading={isLoading}/>
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
            places={places}
            setCardClicked={setCardClicked}
          />
        </Grid>
      </Grid>
    </div>
  );
};
