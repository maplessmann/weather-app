import useWeather from 'hooks/useWeather'

const Weather = () => {
  useWeather()

  return (
    <div className="weather-display">
      <h1>Weather</h1>
    </div>
  )
}

export default Weather
