import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import Modal from "./components/Modal/Modal";
import Home from "./components/Home/Home";
import Daily from "./components/Daily/Daily";
import Hourly from "./components/Hourly/Hourly";
import NotFound from "./components/NotFound/NotFound";
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
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/daily" element={<Daily />} />
        <Route path="/hourly" element={<Hourly />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
