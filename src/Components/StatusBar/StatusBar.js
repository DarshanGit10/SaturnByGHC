import React from "react";
import "./statusBar.css";
import signal from "../../Assets/Status Bar/signal-cellular.png";
import battery from "../../Assets/Status Bar/Vector-2.png";
import wifi from "../../Assets/Status Bar/Vector.png";

const StatusBar = () => {
  return (
    <>
      <div className="statusBar">
        <div className="statusTime">
          <span>10:00</span>
        </div>
        <div className="statusRight">
          <img src={signal} alt="signal" />
          <img src={wifi} alt="wifi" />
          <img src={battery} alt="battery" />
        </div>
      </div>
    </>
  );
};

export default StatusBar;
