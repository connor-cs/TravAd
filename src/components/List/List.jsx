import React, {useState} from 'react'
import { Grid, Typography, FormControl, Select, InputLabel, MenuItem } from '@mui/material'
import PlaceDetails from '../PlaceDetails/PlaceDetails'

export default function List() {
  const [type, setType] = useState('restaurants')
  
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
      <div className='grid-container'>
        <Grid container spacing={3}>
          <PlaceDetails />
        </Grid>
      </div>
    </div>
    
  )
}
