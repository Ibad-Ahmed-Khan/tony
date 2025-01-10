import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaRocket, FaEye, FaHandshake } from "react-icons/fa"; // Importing icons from react-icons

const AboutUs = () => {
  const sliderRef = useRef(null);

  const arrowStyles = {
    backgroundColor: "#2cd87f",
    borderRadius: "50%",
    color: "#fff",
    width: "2rem",
    height: "2rem",
    border: "none",
    marginTop: "3rem",
    marginInline: "3rem",
    cursor: "pointer",
    zIndex: 1000,
  };

  const settings = {
    dots: true,
    infinite: true, // Infinite looping
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Delay between auto slides
    arrows: false, // Disable default arrows
  };

  const goToPrevious = () => {
    sliderRef.current.slickPrev(); // Go to the previous slide
  };

  const goToNext = () => {
    sliderRef.current.slickNext(); // Go to the next slide
  };

  return (
    <div className="container py-5 logo-text">
      {/* Section 1: Introduction */}
      <div className="text-center mb-5">
        <h1 className="display-4">About Us</h1>
        <p
          className="lead mx-auto"
          style={{ maxWidth: "900px", color: "#fff", fontSize: "1rem" }}
        >
          We are a passionate team dedicated to providing top-notch services to
          our clients. Our mission is to make your experience seamless and
          enjoyable, offering innovative solutions tailored to your unique
          needs.
        </p>
      </div>

      {/* Section 2: Our Mission */}
      <div className="row text-center mb-5">
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card shadow-lg border-0 rounded">
            <div className="card-body" style={{ minHeight: "10rem" }}>
              <h3>
                <FaRocket /> Our Mission
              </h3>
              <p>
                Our mission is to empower individuals and businesses by
                providing cutting-edge solutions that drive growth, efficiency,
                and success.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card shadow-lg border-0 rounded">
            <div className="card-body" style={{ minHeight: "10rem" }}>
              <h3>
                <FaEye /> Our Vision
              </h3>
              <p>
                We envision a world where technology bridges gaps, fosters
                creativity, and delivers sustainable growth for everyone.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card shadow-lg border-0 rounded">
            <div className="card-body" style={{ minHeight: "10rem" }}>
              <h3>
                <FaHandshake /> Our Values
              </h3>
              <p>
                Integrity, innovation, and customer-centricity are at the core
                of everything we do. We strive to build lasting relationships
                with our clients based on trust and excellence.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Our Achievements */}
      <div className="text-center mb-5">
        <h2 className="display-4">Our Achievements</h2>
        <p
          className="lead mx-auto"
          style={{ maxWidth: "900px", color: "#fff" }}
        >
          Over the years, we've achieved several milestones that reflect our
          commitment to excellence.
        </p>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div className="col">
            <div className="card shadow-lg border-0 rounded">
              <div
                className="card-body  text-center"
                style={{ minHeight: "8rem" }}
              >
                <h5 className="card-title">10+ Years of Experience</h5>
                <p className="card-text">
                  We’ve been delivering outstanding results to our clients for
                  over a decade.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-lg border-0 rounded">
              <div
                className="card-body  text-center"
                style={{ minHeight: "8rem" }}
              >
                <h5 className="card-title">100+ Successful Projects</h5>
                <p className="card-text">
                  We've successfully completed over 100 projects across various
                  industries.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-lg border-0 rounded">
              <div
                className="card-body  text-center"
                style={{ minHeight: "8rem" }}
              >
                <h5 className="card-title">5 Star Reviews</h5>
                <p className="card-text">
                  Our clients consistently rate us 5 stars for service quality
                  and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: Image Slider */}
      <div className="text-center mb-5">
        <h2 className="display-4">Our Gallery</h2>
        <p
          className="lead mx-auto"
          style={{ maxWidth: "900px", color: "#fff" }}
        >
          Here are some moments from our journey and achievements.
        </p>
        <Slider ref={sliderRef} {...settings}>
          <div style={{ position: "relative" }}>
            <img
              src="https://via.placeholder.com/1200x500/1e242b/ffffff?text=Image+1"
              alt="Gallery 1"
              className="img-fluid rounded shadow-lg"
            />
          </div>
          <div style={{ position: "relative" }}>
            <img
              src="https://via.placeholder.com/1200x500/1e242b/ffffff?text=Image+2"
              alt="Gallery 2"
              className="img-fluid rounded shadow-lg"
            />
          </div>
          <div style={{ position: "relative" }}>
            <img
              src="https://via.placeholder.com/1200x500/1e242b/ffffff?text=Image+3"
              alt="Gallery 3"
              className="img-fluid rounded shadow-lg"
            />
          </div>
        </Slider>
        {/* Custom Navigation Buttons */}
        <div className="d-flex justify-content-center">
          <button onClick={goToPrevious} style={arrowStyles}>
            &lt;
          </button>
          <button onClick={goToNext} style={arrowStyles}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
