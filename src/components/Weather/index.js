import Button from 'components/Button'
import useWeather from 'hooks/useWeather'

import './Weather.scss'

const formatter = {
  temp: val => `${~~Math.round(val)}º`,
  wind: val => `${~~Math.round(val * 3.6)} km/h`,
}

const Temperature = ({ weather }) => (
  <div className="temperature-info">
    <strong className="value">{formatter.temp(weather?.main?.temp)}</strong>
    <div className="variation">
      <span className="label">Low: </span>
      <span className="value">{formatter.temp(weather?.main?.temp_min)}</span>
    </div>
    <div className="variation">
      <span className="label">High: </span>
      <span className="value">{formatter.temp(weather?.main?.temp_max)}</span>
    </div>
  </div>
)

const Additional = ({ weather }) => (
  <div className="additional-info">
    <div className="info">
      <span className="label">Wind</span>
      <span className="value">{formatter.wind(weather?.wind?.speed)}</span>
    </div>
    <div className="info">
      <span className="label">Humidity</span>
      <span className="value">{weather?.main?.humidity}%</span>
    </div>
  </div>
)

const Weather = () => {
  const { weather, onUpdateData } = useWeather()

  return (
    <div className="weather-display">
      <header className="header">
        <h1 className="city">{weather?.name}</h1>
        <h2 className="description">{weather?.weather?.[0]?.description}</h2>
      </header>
      <Temperature weather={weather} />
      <Additional weather={weather} />
      <Button onClick={onUpdateData}>Update data</Button>
    </div>
  )
}

export default Weather
