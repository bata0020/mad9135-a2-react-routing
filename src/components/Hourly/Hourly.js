import React from "react";
import HourlyList from "../HourlyList/HourlyList";

function Hourly({ hoursWeather }) {
  if (!hoursWeather) {
    return;
  } else {
    return (
      <ul className="hourlyCard">
        {hoursWeather.map((hourly) => (
          <HourlyList key={hourly.dt} data={hourly} />
        ))}
      </ul>
    );
  }
}

export default Hourly;
