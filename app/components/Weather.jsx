var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({

  getInitialState: function () {
    return{
      isLoading: false
    }
  },
  handleSearch: function (location) {
    var that = this;

    this.setState ({
      isLoading: true
    });

    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      })
    },function (errorMessage){
      alert(errorMessage);
      that.setState({
        location: null,
        temp: null,
        isLoading: false
      })
    });
  },
  render: function(){
    var weatherData = {
      location: this.state.location,
      temp: this.state.temp,
      isLoading: this.state.isLoading
    }

    function renderMessage (){
      if (weatherData.isLoading){
        return <h3 className="text-center">Fetching Weather .....</h3>;
      } else if ( weatherData.temp && weatherData.location) {
        return <WeatherMessage weatherData={weatherData}/>;
      }
    }

    return(
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    )
  }
});

module.exports = Weather;
