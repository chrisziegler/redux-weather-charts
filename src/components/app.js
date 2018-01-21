import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather-list';


export default class App extends Component {
  render() {
    return (
      <div>
        <div>Redux Weather App</div>
        <div>
          <SearchBar />
          <WeatherList />
        </div>
      </div>
    );
  }
}
