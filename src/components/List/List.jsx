import React from 'react'
import { Grid, Typography } from '@mui/material'
import PlaceDetails from '../PlaceDetails/PlaceDetails'

export default function List() {
  return (
    <div className='list-container'>
      <Typography variant="h4">Food and Dining around you</Typography>
      <div className='grid-container'>
        <Grid container spacing={3}>
          <PlaceDetails />
        </Grid>
      </div>
    </div>
    
  )
}
