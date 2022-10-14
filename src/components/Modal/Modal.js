import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./modal.css";

function Modal({ open, children, close, passLocation }) {
  const [isClicked, setIsClicked] = useState(false);

  function handleYes(ev) {
    setIsClicked(true);
  }

  function handleNo(ev) {
    passLocation({
      lat: 45.35,
      lon: -75.76,
    });
  }

  useEffect(() => {
    if (isClicked) {
      navigator.geolocation.getCurrentPosition((position) => {
        passLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    }
  }, [isClicked]);

  if (!open) {
    return null;
  } else {
    return ReactDOM.createPortal(
      <>
        <div className="overlay">
          <div className="box-style">
            <h2>Permission Request</h2>
            <p>Allow app to use your current location?</p>
            <div className="flex-btn">
              <button
                className="yesBtn"
                onClick={() => {
                  close();
                  handleYes();
                }}
              >
                Yes
              </button>
              <button
                className="noBtn"
                onClick={() => {
                  close();
                  handleNo();
                }}
              >
                No
              </button>
            </div>
          </div>
        </div>
      </>,
      document.getElementById("portal")
    );
  }
}

export default Modal;
