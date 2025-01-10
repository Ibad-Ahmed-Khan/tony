import React, { useState, useEffect } from "react";
import Logo from "../assets/logoTony.png";

const Loader = () => {
  return (
    <div className="overlay">
      <div
        className="flex-center min-vh-100 position-absolute"
        style={{
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <img src={Logo} alt="" style={{ maxWidth: "8rem" }} />
      </div>
    </div>
  );
};

export default Loader;
