import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import Modal from "./components/Modal/Modal";
import Home from "./components/Home/Home";
import Daily from "./components/Daily/Daily";
import Hourly from "./components/Hourly/Hourly";
import NotFound from "./components/NotFound/NotFound";
import NavLinks from "./components/NavLinks/NavLinks";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [userLoc, setUserLoc] = useState();
  const [locationWeather, setLocationWeather] = useState();
  const [daysWeather, setDaysWeather] = useState();
  const [hoursWeather, setHoursWeather] = useState();
  const [searchCity, setSearchCity] = useState();
  const [searchedLocation, setSearchedLocation] = useState();

  function isClose() {
    setIsOpen(false);
  }

  function passUserLoc(location) {
    console.log(location);
    setUserLoc(location);
  }

  function locationSearch(data) {
    console.log(data);
    setSearchedLocation(data);
  }

  function searchValue(data) {
    console.log(data);
    setSearchCity(data);
  }

  function currentWeatherData(data) {
    console.log(data);
    setLocationWeather(data);
  }

  function dailyWeather(data) {
    console.log(data);
    setDaysWeather(data.slice(1, 7));
  }

  function hourlyWeather(data) {
    console.log(data.slice(1, 7));
    setHoursWeather(data.slice(1, 7));
  }

  return (
    <div className="App">
      <Modal open={isOpen} close={isClose} passLocation={passUserLoc} />
      <Header />
      <SearchBar
        userCoordinates={userLoc}
        searchValue={searchValue}
        locationSearch={locationSearch}
        currentWeather={currentWeatherData}
        dailyWeather={dailyWeather}
        hourlyWeather={hourlyWeather}
      />
      <NavLinks />
      <Routes>
        <Route path="/" element={<Navigate to="/default" />} />
        <Route
          path="/home"
          element={
            <Home
              userCoordinates={userLoc}
              searchedLocation={searchedLocation}
              locationWeather={locationWeather}
              searchCity={searchCity}
            />
          }
        />
        <Route
          path="/daily"
          element={<Daily daysWeather={daysWeather} searchCity={searchCity} />}
        />
        <Route
          path="/hourly"
          element={
            <Hourly hoursWeather={hoursWeather} searchCity={searchCity} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
