import React from "react";
import "../styles/custom.css";

const Logo = () => {
  return (
    <div className="logo-container">
      <div className="logo-loader">
        <div className="logo-circle"></div>
        <div className="logo-circle-inner"></div>
      </div>
      <h1 className="mt-2 fs-5">
        <span>Tony Hub</span>
      </h1>
    </div>
  );
};

export default Logo;
