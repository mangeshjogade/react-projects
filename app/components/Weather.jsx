var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({

  getInitialState: function () {
    return{
      isLoading: false,

    }
  },
  handleSearch: function (location) {
    var that = this;

    this.setState ({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });

    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      })
    },function (errorMessage){

      that.setState({
        location: undefined,
        temp: undefined,
        isLoading: false,
        errorMessage: errorMessage.message
      })
    });
  },
  componentDidMount: function () {
    var location = this.props.location.query.location;

    if (location && location.length > 0){
      this.handleSearch(location);
      window.location.hash = '#/';
    }

  },
  componentWillReceiveProps: function (newProps) {
    var location = newProps.location.query.location;

    if (location && location.length > 0){
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  render: function(){
    var weatherData = {
      location: this.state.location,
      temp: this.state.temp,
      isLoading: this.state.isLoading,
      errorMessage: this.state.errorMessage
    }



    function renderMessage (){
      if (weatherData.isLoading){
        return <h3 className="text-center">Fetching Weather .....</h3>;
      } else if ( weatherData.temp && weatherData.location) {
        return <WeatherMessage weatherData={weatherData}/>;
      }
    }

    function renderError () {
      if (typeof weatherData.errorMessage === 'string'){
        return (
          <ErrorModal title="ERROR" message={weatherData.errorMessage}/>
        )
      }
    }

    return(
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
});

module.exports = Weather;
