import React, { useEffect } from "react";
import Dall from "../assets/dall.webp";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Team from "./Team";
import { Link } from "react-router-dom";
import Contact from "./Contact";
const Home = () => {
  return (
    <div className="home text-light logo-text ">
      <div className="d-flex justify-content-center align-items-center  component-h">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            {/* Left Column with Text */}
            <div className="col-12 col-md-6 p-4">
              <h1 className="hero-title display-4 text-white mb-4 fs-1 fs-md-2 fs-lg-3 ">
                Welcome to Our Company
              </h1>
              <p className="lead text-white mb-4 fs-6 fs-md-5 fs-lg-4 text-light">
                We specialize in providing exceptional web development services
                for businesses, including custom websites, e-commerce platforms,
                and WordPress & Shopify solutions.
              </p>
              <Link to="/services" className="me-2 text-decoration-none">
                <button className="btn btn-lg btn-main text-white fs-6 py-3 px-4 rounded-pill d-flex align-items-center justify-content-center">
                  Get Started
                  <i className="bi bi-arrow-right"></i>
                  {/* Bootstrap icon for the arrow */}
                </button>
              </Link>
            </div>

            {/* Right Column with Image */}
            <div className="col-12 col-md-6 d-flex justify-content-center ">
              <img src={Dall} alt="Company" className="hero-img" />
            </div>
          </div>
        </div>
      </div>
      <AboutUs />
      <Services />
      <Team />
      <Contact />
    </div>
  );
};

export default Home;
