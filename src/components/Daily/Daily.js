import React from "react";
import DailyList from "../DailyList/DailyList";

function Daily({ daysWeather }) {
  if (!daysWeather) {
    return;
  } else {
    return (
      <ul className="dailyCard">
        {daysWeather.map((daily) => (
          <DailyList key={daily.dt} data={daily} />
        ))}
      </ul>
    );
  }
}

export default Daily;
