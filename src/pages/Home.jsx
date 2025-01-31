import React, { useEffect } from "react";
import Dall from "../assets/dall.webp";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Team from "./Team";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import AnimatedText from "../helper/AnimatedText";

const Home = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="home text-light logo-text">
      <div className="d-flex justify-content-center align-items-center component-h">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            {/* Left Column with Text */}
            <div className="col-12 col-md-6 p-4">
              <p className="hero-description fs-4 fs-md-3 fs-lg-2 fw-medium">
                <AnimatedText />
              </p>

              <p className="lead text-white mb-4 fs-6 fs-md-5 fs-lg-4 text-light">
                We specialize in providing exceptional web development services
                for businesses, including custom websites, e-commerce platforms,
                and WordPress & Shopify solutions.
              </p>
              <Link
                to="/services"
                className="me-2 text-decoration-none"
                onClick={handleScrollToTop}
              >
                <button className="btn btn-lg btn-main text-white fs-6 py-3 px-4 rounded-pill d-flex align-items-center justify-content-center">
                  Get Started
                  <i className="bi bi-arrow-right"></i>
                </button>
              </Link>
            </div>

            {/* Right Column with Image */}
            <div className="col-12 col-md-6 d-flex justify-content-center">
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
