import React from "react";
import "./hourlyList.css";

function HourlyList({ data }) {
  let time = getTime(data.dt);
  let temp = data.temp;
  let feels = data.feels_like;
  let desc = data.weather[0]["description"];
  let weatherIcon = data.weather[0]["icon"];

  function getTime(value) {
    return `${new Date(value * 1000).getHours()}:00`;
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
        <p>Time: {time}</p>
        <p>Real Feel: {Math.round(feels)} °C</p>
      </div>
    </li>
  );
}

export default HourlyList;

//6 hours
//date, time, real feel temp, weather description
