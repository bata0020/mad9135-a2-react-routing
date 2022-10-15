import React from "react";
import DailyList from "../DailyList/DailyList";
import "./daily.css";

function Daily({ daysWeather, searchCity }) {
  if (!daysWeather) {
    return;
  } else {
    return (
      <>
        <h1>{searchCity} Daily Weather</h1>
        <ul className="dailyCard">
          {daysWeather.map((daily) => (
            <DailyList key={daily.dt} data={daily} />
          ))}
        </ul>
      </>
    );
  }
}

export default Daily;
