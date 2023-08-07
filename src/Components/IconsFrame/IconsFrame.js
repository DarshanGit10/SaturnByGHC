import iconsData from "./iconsData";
import "./IconsFrame.css";

import React from "react";

const IconsFrame = () => {
  const displayedData = [...iconsData, ...iconsData];

  return (
    <>
      <p className="welcomeJune">
        <span className="welcome">Welcome, </span>
        <span className="june">June!</span>
      </p>
      <div className="iconsContainer">
        {displayedData.map((item) => (
          <ul key={item.id}>
            <li style={{ backgroundColor: item.color }}>
              <img src={item.img} alt={item.name} />
              <p>{item.name}</p>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default IconsFrame;
