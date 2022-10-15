import React from "react";

function Welcome({ defaultLoc }) {
  return (
    <>
      <div className="welcome">
        <h1>Welcome To Weather App</h1>
        <p>
          Use the search box above to search for a city and view it's weather.
        </p>
        <p>The three recent city searches will appear on the right side.</p>
        <p>
          Click the daily or hourly links to view the location's daily or hourly
          forecast.
        </p>
      </div>
      <div>
        <h2>Location Weather</h2>
      </div>
    </>
  );
}

export default Welcome;
