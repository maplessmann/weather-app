import { useEffect, useState } from 'react'
import services from 'services'

const useWeather = () => {
  const [weather, setWeather] = useState({})

  const getWeather = location => {
    services.weather.getWeather(location).then(setWeather)
  }

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getWeather)
    } else {
      console.log('Geolocation is not available in your browser')
    }
  }

  useEffect(() => {
    getLocation()
  }, [])

  return {
    weather,
    onUpdateData: getLocation,
  }
}

export default useWeather
