import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {

  const key = process.env.REACT_APP_TRAVEL_API_KEY
  
  try {
    const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
      headers: {
        'x-rapidapi-key': "68401ebe54msh8af2606513d710bp1b21b0jsn49f916645636",
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      },
    });

    // console.log({data})
    return data;
  } catch (error) {
    console.log(error);
  }
};

// "5e91f18e89msh621e829d8be17c1p1c357bjsn1e49248fff38"

//make call to weather api