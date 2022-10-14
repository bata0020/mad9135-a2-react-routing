import { useState } from "react";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import Modal from "./components/Modal/Modal";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [userLoc, setUserLoc] = useState();

  function isClose() {
    setIsOpen(false);
  }

  function passUserLoc(location) {
    console.log(location);
    setUserLoc(location);
  }

  return (
    <div className="App">
      <Modal open={isOpen} close={isClose} passLocation={passUserLoc} />
      <Header />
      <SearchBar userCoordinates={userLoc} />
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
    </div>
  );
}

export default App;
