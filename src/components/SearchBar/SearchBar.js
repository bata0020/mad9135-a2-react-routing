import React, { useEffect, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import Loader from "../Loader/Loader";
import "./searchBar.css";

function SearchBar({
  userCoordinates,
  searchValue,
  locationSearch,
  currentWeather,
  dailyWeather,
  hourlyWeather,
}) {
  const BASE_URL_LOCATION = "https://us1.locationiq.com/v1";
  const API_TOKEN_LOCATION = "pk.064263178d94fcd2479cae110ac3e880";

  const BASE_URL_OPEN_WEATHER = `https://api.openweathermap.org/data/2.5/onecall?`;
  const API_KEY_OPEN_WEATHER = "9504c4f81d709d786efc5ae632df3730";

  const [search, setSearch] = useState();
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const searchedCity = [];
  const [cityList, setCityList] = useLocalStorage("cityName", searchedCity);

  function handleSubmit(ev) {
    ev.preventDefault();
    setSearch(ev.target[0].value);
    searchValue(ev.target[0].value);
    if (cityList.length > 2) {
      cityList.splice(0, 1);
      setCityList(cityList.concat(ev.target[0].value));
    } else {
      setCityList(cityList.concat(ev.target[0].value));
    }
  }

  useEffect(() => {
    if (search) {
      setIsLoading(true);
      fetchLocation(search);
    }
  }, [search]);

  useEffect(() => {
    setIsLoading(true);
    if (userCoordinates === undefined) return;
    if (Object.keys(userCoordinates).length) {
      setLat(userCoordinates.lat);
      setLon(userCoordinates.lon);
    }
  }, [userCoordinates]);

  async function fetchLocation(location) {
    await fetch(
      `${BASE_URL_LOCATION}/search.php?key=${API_TOKEN_LOCATION}&q=${location}&format=json`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0]);
        setLat(data[0].lat);
        setLon(data[0].lon);
        locationSearch({ lat, lon });
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    if (lat && lon) {
      setIsLoading(true);
      fetch(
        `${BASE_URL_OPEN_WEATHER}lat=${lat}&lon=${lon}&appid=${API_KEY_OPEN_WEATHER}&exclude=minutely&units=metric`
      )
        .then((response) => {
          if (response.status > 399) {
            throw new Error(response.statusText);
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          currentWeather(data.current);
          dailyWeather(data.daily);
          hourlyWeather(data.hourly);
          setIsLoading(false);
        })
        .catch((err) => {
          console.warn(err);
          setIsLoading(false);
        });
    }
  }, [lat, lon]);

  function handleClick(ev) {
    ev.preventDefault();
    setSearch(ev.target.innerText);
  }

  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <>
        <form className="inputForm" onSubmit={handleSubmit}>
          <input type="text" placeholder="Search A City"></input>
          <button className="search-btn" type="submit">
            Search
          </button>
        </form>
        <aside>
          {cityList.map((item) => (
            <button
              className="city-btn"
              key={item}
              value={item}
              onClick={handleClick}
            >
              {item}
            </button>
          ))}
        </aside>
        {isLoading && <Loader />}
      </>
    );
  }
}

export default SearchBar;
