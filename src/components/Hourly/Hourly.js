import React from "react";
import HourlyList from "../HourlyList/HourlyList";
import "./hourly.css";

function Hourly({ hoursWeather, searchCity }) {
  if (!hoursWeather) {
    return;
  } else {
    return (
      <>
        <h1>{searchCity} Hourly Weather</h1>
        <ul className="hourlyCard">
          {hoursWeather.map((hourly) => (
            <HourlyList key={hourly.dt} data={hourly} />
          ))}
        </ul>
      </>
    );
  }
}

export default Hourly;
