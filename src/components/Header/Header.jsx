import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  TextField,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { Autocomplete } from "@react-google-maps/api";
import "./header.css";

export default function Header({ setCoords }) {
  const [value, setValue] = useState();
  const [auto, setAuto] = useState(null);

  const onLoad = (autoC) => setAuto(autoC);

  const onPlaceChanged = () => {
    const lat = auto.getPlace().geometry.location.lat();
    const lng = auto.getPlace().geometry.location.lng();
    setCoords({ lat, lng });
  };

  return (
    <AppBar position="static">
      <Toolbar className="toolbar">
        <Typography variant="h5">Travel Advisor</Typography>
        <Box display="flex" className="box">
          <Typography className="title" variant="h5">
            Explore
          </Typography>
          <Autocomplete onPlaceChanged={onPlaceChanged} onLoad={onLoad}>
            <div className="search">
              <div className="searchIcon">
                <SearchSharpIcon className='icon'/>
              </div>
              <TextField
                id="outlined-basic"
                className="search"
                label="search places"
                variant="outlined"
              />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
