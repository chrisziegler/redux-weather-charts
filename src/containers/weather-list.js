import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';


class WeatherList extends Component {
  renderWeather(cityData) {
    // prevents JS crash from API on city name typo
    if (!cityData) {
      return null;
    }

    const name = cityData.city.name;
    const temps = cityData.list.map((item) => item.main.temp);
    const pressures = cityData.list.map((item) => item.main.pressure);
    const humidities = cityData.list.map((item) => item.main.humidity);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td><Chart data={temps} color="orange" /></td>
        <td><Chart data={pressures} color="green" /></td>
        <td><Chart data={humidities} color="black" /></td>
      </tr>
    );
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (&#8457;)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {/* run this function for every item (cityData) in weather array of cities (redux state) */}
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

// function mapStateToProps(state) {
//   return { weather: state.weather };
// }
function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);