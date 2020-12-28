import { useEffect } from 'react'

const useWeather = () => {
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(console.log)
    } else {
      console.log('Geolocation is not available in your browser')
    }
  }, [])
}

export default useWeather
