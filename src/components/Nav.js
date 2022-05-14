import React from "react";
import logo from "../images/logo-removebg-preview.png";
import image1 from "../images/image-1-removebg-preview (1).png";
import image2 from "../images/image-2-removebg-preview.png";
const Nav = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <img src={logo} alt="shopline-logo" />
          <h2>shopline</h2>
        </div>

        <div className="app-store">
          <div className="app-container">
            <div className="app">
              <img src={image1} alt="app-store" />
            </div>
            <div className="app">
              <img src={image2} alt="apple-store" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
