import "./LogoFrame.css";
import React from "react";
import logo from "../../Assets/LogoFrame/saturn new logo white 3.png";
import cart from "../../Assets/LogoFrame/majesticons_home.svg";

const LogoFrame = () => {
  return (
    <>
      <div className="logoContainer">
        <img
          className="logoLetter"
          src="https://cdn.shopify.com/s/files/1/0612/7747/0942/files/Frame_3930_1.png?v=1679898117"
          alt="logo"
        />
        <img src={logo} alt="logo" className="logoSymbol" />
        <div className="cartContainer">
          <span className="cartCount">1</span>
          <img src={cart} alt="cart" className="logoCart" />
        </div>
      </div>
    </>
  );
};

export default LogoFrame;
