import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Rating,
  Box,
  Button,
  Chip,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import "./placeDetails.css";

export default function PlaceDetails({ place, selected, refProp }) {
  if (selected) refProp?.current?.scrollIntoView({behavior: "smooth"});
  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 300 }}
        image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
        alt={"restaurant photo"}
        title={place.name}
      />
      <CardContent>
        <Typography variant="h5">{place.name}</Typography>

        <Box display="flex" justifyContent="space-between">
          <Rating readOnly value={Number(place.rating)} />
          <Typography>Reviews: {place.num_reviews}</Typography>
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Typography>Price: {place.price_level}</Typography>
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Typography>Ranking: {place.ranking}</Typography>
        </Box>

        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className="chip" />
        ))}
        {place.address && (
          <Typography className="subtitle" color="textSecondary">
            <LocationOnIcon /> {place.address}
          </Typography>
        )}

        {place.phone && (
          <Typography className="subtitle" color="textSecondary">
            <PhoneIcon /> {place.phone}
          </Typography>
        )}

        <Button
          onClick={() => window.open(place.website)}
          style={{ "margin-top": "15px" }}
        >
          Website
        </Button>
        <Button
          onClick={() => window.open(place.web_url)}
          style={{ "margin-top": "15px" }}
        >
          Trip Advisor
        </Button>
      </CardContent>
    </Card>
  );
}
