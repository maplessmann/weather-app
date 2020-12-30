import axios from 'axios'

const getWeather = ({ coords }) => {
  const { latitude, longitude } = coords

  return axios
    .get(`https://api.openweathermap.org/data/2.5/weather`, {
      params: {
        lat: latitude.toFixed(2),
        lon: longitude.toFixed(2),
        units: 'metric',
        appid: '43d5a39c03e371b05715c48d4d8c01c4',
      },
    })
    .then(({ data }) => data)
}

export default {
  getWeather,
}
