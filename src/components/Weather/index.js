import Button from 'components/Button'
import SplashScreen from 'components/SplashScreen'
import useWeather from 'hooks/useWeather'
import formatter from 'utils/formatter'

import './Weather.scss'

const Header = ({ weather }) => (
  <header className="header">
    <div className="location">
      <h1 className="city">{weather?.name}</h1>
      <h2 className="description">{weather?.weather?.[0]?.description}</h2>
    </div>
    <div className="illustration">
      <img
        className="icon"
        src={`http://openweathermap.org/img/wn/${weather?.weather?.[0]?.icon}@2x.png`}
        alt="Current weather icon"
      />
    </div>
  </header>
)

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
      <span className="value">
        {formatter.percent(weather?.main?.humidity)}
      </span>
    </div>
  </div>
)

const Weather = () => {
  const { weather, onUpdateData } = useWeather()

  if (!weather) return <SplashScreen />

  return (
    <div className="weather-display">
      <Header weather={weather} />
      <Temperature weather={weather} />
      <Additional weather={weather} />
      <Button onClick={onUpdateData}>Update data</Button>
    </div>
  )
}

export default Weather
