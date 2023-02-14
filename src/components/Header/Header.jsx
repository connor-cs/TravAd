import React from "react";
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

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar className="toolbar">
        <Typography variant="h5">Travel Advisor</Typography>
        <Box display="flex">
          <Typography className="title" variant="h5">
            Explore
          </Typography>
          <div className="search-container">
            <SearchSharpIcon />
            <TextField
              id="outlined-basic"
              className="search"
              label="search places"
              variant="outlined"
            />
          </div>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
