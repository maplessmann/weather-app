import { useEffect, useState } from 'react'
import services from 'services'

const useWeather = () => {
  const [weather, setWeather] = useState()

  const getWeather = location => {
    services.weather.getWeather(location).then(setWeather)
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getWeather)
    } else {
      console.log('Geolocation is not available in your browser')
    }
  }, [])

  console.log({ weather })

  return {
    weather,
  }
}

export default useWeather
