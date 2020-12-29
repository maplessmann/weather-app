import axios from 'axios'

const getWeather = ({ coords }) => {
  const { latitude, longitude } = coords

  return axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
    params: {
      lat: latitude.toFixed(2),
      lon: longitude.toFixed(2),
      appid: process.env.API_KEY,
    },
  }).then(({ data }) => data)
}

export default {
  getWeather,
}
