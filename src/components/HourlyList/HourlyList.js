import React from "react";

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
      <img src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}></img>
      <p>Time: {time}</p>
      <p>Description: {desc}</p>
      <p>Temp: {Math.round(temp)} °C</p>
      <p>Real Feel: {Math.round(feels)} °C</p>
    </li>
  );
}

export default HourlyList;

//6 hours
//date, time, real feel temp, weather description
