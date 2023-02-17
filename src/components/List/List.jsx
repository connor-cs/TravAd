import React, { useState } from 'react'
import { Grid, Typography, FormControl, Select, InputLabel, MenuItem, CircularProgress } from '@mui/material'
import PlaceDetails from '../PlaceDetails/PlaceDetails'
import './list.css'

export default function List({places, isLoading }) {
  const [type, setType] = useState('restaurants')

  // const places = [
  //   { name: 'place1' },
  //   { name: 'place2' }
  // ]

  return (
    <div className='list-container'>
      <Typography variant="h4">Food and Dining around you</Typography>
      <FormControl className="form-cont">
        <InputLabel>Type</InputLabel>
        <Select value={type}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="businesses">Businesses</MenuItem>
        </Select>
      </FormControl>
      <FormControl className="form-cont">
        <InputLabel>Rating</InputLabel>
        <Select value={''}>
          <MenuItem>a</MenuItem>
          <MenuItem>b</MenuItem>
          <MenuItem>c</MenuItem>
        </Select>
      </FormControl>

      <div className='cards-container'>
        <Grid container spacing={3} className="list">
          {places?.map((el, i) => (
            <Grid item key={i}>
              <PlaceDetails place={el} />
            </Grid>
          ))}
        </Grid>
      </div>

    </div>

  )
}
