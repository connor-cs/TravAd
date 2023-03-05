import React, { useState, useRef, createRef, useEffect } from "react";
import {
  Grid,
  Typography,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import "./list.css";

export default function List({
  places,
  cardClicked,
  isLoading,
  type,
  setType,
  rating,
  setRating,
}) {
  const [elementRefs, setElementRefs] = useState([]);

  //array of all card refs
  //create ref for each place
  //check if clicked ref
  //Array(num inside here will set length)
  //.fill() fill with undefined val

  useEffect(() => {
    const refs = Array(places.length)
      .fill()
      .map((_, i) => elementRefs[i] || createRef());
    console.log("refs", refs);
    setElementRefs(refs);
  }, [places]);

  return (
    <div className="list-container">
      {isLoading ? (
        <div className="loading">
          <CircularProgress size="6rem" />
        </div>
      ) : (
        <>
          <Typography variant="h4">Food and Dining around you</Typography>
          <FormControl className="form-cont">
            <InputLabel>Type</InputLabel>
            <Select value={type} onChange={(e)=>setType(e.target.value)}>
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="businesses">Businesses</MenuItem>
            </Select>
          </FormControl>
          <FormControl className="form-cont">
            <InputLabel>Rating</InputLabel>
            <Select value={rating} onChange={(e)=>{
              console.log('rating changed',{rating})
              setRating(e.target.value)}}>
              <MenuItem>3.0 and up</MenuItem>
              <MenuItem>4.0 and up</MenuItem>
              <MenuItem>4.5 and above</MenuItem>
            </Select>
          </FormControl>

          <div className="cards-container">
            <Grid container spacing={3} className="list">
              {places?.map((el, i) => (
                <Grid item key={i} ref={elementRefs[i]}>
                  <PlaceDetails
                    place={el}
                    selected={Number(cardClicked) === i}
                    refProp={elementRefs[i]}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        </>
      )}
    </div>
  );
}
