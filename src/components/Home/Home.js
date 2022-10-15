import React from "react";
import "./home.css";

function Home({
  userCoordinates,
  searchCity,
  locationWeather,
  searchedLocation,
}) {
  // console.log(userCoordinates);
  // console.log("City Searched: ", searchCity);
  console.log(locationWeather);
  // console.log("Location Searched", searchedLocation);
  function getTime(value) {
    return `${new Date(value * 1000).getHours()}:${new Date(
      value * 1000
    ).getMinutes()}`;
  }
  if (searchedLocation === undefined && locationWeather === undefined) {
    return (
      <>
        <div className="welcome">
          <h1>Welcome To Weather App</h1>
          <p>
            Use the search box above to search for a city and view it's weather.
          </p>
          <p>The three recent city searches will appear on the right side.</p>
          <p>
            Click the daily or hourly links to view the location's daily or
            hourly forecast.
          </p>
        </div>
      </>
    );
  } else if (searchedLocation === undefined) {
    return (
      <>
        <div className="welcome">
          <h1>Welcome To Weather App</h1>
          <p>
            Use the search box above to search for a city and view it's weather.
          </p>
          <p>The three recent city searches will appear on the right side.</p>
          <p>
            Click the daily or hourly links to view the location's daily or
            hourly forecast.
          </p>
        </div>
        <div className="location-weather">
          <h2>Weather On Your Location</h2>
          <div className="grid">
            <div className="info">
              <div className="info-image">
                <img
                  src={`http://openweathermap.org/img/wn/${locationWeather.weather[0].icon}@2x.png`}
                  alt="weather icon"
                  className="icon"
                ></img>
              </div>
              <div className="info-details">
                <p className="temp">{Math.round(locationWeather.temp)} °C</p>
                <p>{locationWeather.weather[0].main}</p>
              </div>
            </div>
            <div className="other-info">
              <p>Feels: {Math.round(locationWeather.feels_like)} °C</p>
              <p>Sunrise: {getTime(locationWeather.sunrise)}</p>
              <p>Sunset: {getTime(locationWeather.sunset)}</p>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h1>{searchCity}</h1>
        <div className="grid">
          <div className="info">
            <div className="info-image">
              <img
                src={`http://openweathermap.org/img/wn/${locationWeather.weather[0].icon}@2x.png`}
                alt="weather icon"
                className="icon"
              ></img>
            </div>
            <div className="info-details">
              <p className="temp">{Math.round(locationWeather.temp)} °C</p>
              <p>{locationWeather.weather[0].main}</p>
            </div>
          </div>
          <div className="other-info">
            <p>Feels: {Math.round(locationWeather.feels_like)} °C</p>
            <p>Sunrise: {getTime(locationWeather.sunrise)}</p>
            <p>Sunset: {getTime(locationWeather.sunset)}</p>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
