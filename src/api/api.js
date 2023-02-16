import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  try {
    const data = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
      headers: {
        'x-rapidapi-key': process.env.REACT_APP_GOOGLE_MAPS_KEY,
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      },
    });

    console.log({data})
    return data;
  } catch (error) {
    console.log(error);
  }
};

