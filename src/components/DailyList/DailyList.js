import React from "react";
import "./dailyList.css";

function DailyList({ data }) {
  let date = getDate(data.dt);
  let temp = data.temp["day"];
  let desc = data.weather[0]["description"];
  let dayFeels = data.feels_like["day"];
  let nightFeels = data.feels_like["night"];
  let weatherIcon = data.weather[0]["icon"];

  function getDate(value) {
    let currentDate = new Date(value * 1000);
    let day = currentDate.getDate();
    let month = currentDate.getMonth();
    let displayDate = `${month + 1}-${day}`;
    // return `${new Date(value * 1000)}`;
    return displayDate;
  }

  return (
    <li className="card">
      <div className="card-info">
        <img
          src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
          alt="weather icon"
        ></img>
        <p className="temp">{Math.round(temp)} °C</p>
        <p>{desc}</p>
      </div>
      <div className="card-other">
        <p>Date: {date}</p>
        <p>Feels Day: {Math.round(dayFeels)} °C</p>
        <p>Feels Night: {Math.round(nightFeels)} °C</p>
      </div>
    </li>
  );
}

export default DailyList;

//6 days
//date, time, reel feel temp at day and night, weather description
