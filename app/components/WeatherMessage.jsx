var React = require('react');

var WeatherMessage = (props) => {
  var {location,temp} = props.weatherData;

  return(
    <h3>It is {temp} in {location}</h3>
  )
}

module.exports = WeatherMessage;
