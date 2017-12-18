var React = require('react');

var WeatherMessage = (props) => {
  var {location,temp} = props.weatherData;

  return(
    <h3 className="text-center">It is {temp} in {location}</h3>
  )
}

module.exports = WeatherMessage;
