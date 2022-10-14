import React from "react";

function Daily() {
  return (
    <>
      <div className="welcome">
        <h1>Welcome To Weather App</h1>
        <p>
          Use the search box above to search for a city and view it's weather.
        </p>
        <p>
          Click the daily or hourly links to view the location's daily or hourly
          forecast.
        </p>
      </div>
      <div className="weather-location">
        <h2>Your current location's weather.</h2>
      </div>
    </>
  );
}

export default Daily();
