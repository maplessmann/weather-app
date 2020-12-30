const formatter = {
  temp: val => `${~~Math.round(val)}º`,
  wind: val => `${~~Math.round(val * 3.6)} km/h`,
  percent: val => `${val}%`,
}

export default formatter
