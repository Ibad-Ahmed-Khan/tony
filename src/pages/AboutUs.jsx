import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaRocket, FaEye, FaHandshake } from "react-icons/fa";

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
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const goToPrevious = () => sliderRef.current.slickPrev();
  const goToNext = () => sliderRef.current.slickNext();

  const missionData = [
    {
      title: "Our Mission",
      icon: <FaRocket />,
      text: "Our mission is to empower individuals and businesses by providing cutting-edge solutions that drive growth, efficiency, and success.",
    },
    {
      title: "Our Vision",
      icon: <FaEye />,
      text: "We envision a world where technology bridges gaps, fosters creativity, and delivers sustainable growth for everyone.",
    },
    {
      title: "Our Values",
      icon: <FaHandshake />,
      text: "Integrity, innovation, and customer-centricity are at the core of everything we do. We strive to build lasting relationships with our clients based on trust and excellence.",
    },
  ];

  const achievementsData = [
    {
      title: "10+ Years of Experience",
      text: "We’ve been delivering outstanding results to our clients for over a decade.",
    },
    {
      title: "100+ Successful Projects",
      text: "We've successfully completed over 100 projects across various industries.",
    },
    {
      title: "5 Star Reviews",
      text: "Our clients consistently rate us 5 stars for service quality and customer satisfaction.",
    },
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Business milestone
    "https://images.unsplash.com/flagged/photo-1576485436509-a7d286952b65?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Teamwork and col
    "https://images.unsplash.com/photo-1698047681469-8e0c19e80a66?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <div className="container py-5 logo-text">
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

      <div className="row text-center mb-5">
        {missionData.map((item, index) => (
          <div className="col-lg-4 col-md-6 mb-4" key={index}>
            <div
              className=" shadow-lg  rounded position-relative p-2 pt-5"
              style={{ border: "1px solid var(--main-color-2)" }}
            >
              <div className="moving-border" />
              <div className="card-body" style={{ minHeight: "10rem" }}>
                <h3>
                  {item.icon} {item.title}
                </h3>
                <p>{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

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
          {achievementsData.map((item, index) => (
            <div className="col" key={index}>
              <div
                className=" shadow-lg  rounded position-relative p-2 pt-5"
                style={{ border: "1px solid var(--main-color-2)" }}
              >
                <div className="moving-border-reverse" />
                <div
                  className="card-body text-center"
                  style={{ minHeight: "8rem" }}
                >
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mb-5">
        <h2 className="display-4">Our Gallery</h2>
        <p
          className="lead mx-auto"
          style={{ maxWidth: "900px", color: "#fff" }}
        >
          Here are some moments from our journey and achievements.
        </p>
        <Slider ref={sliderRef} {...settings}>
          {galleryImages.map((src, index) => (
            <div style={{ position: "relative" }} key={index}>
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="img-fluid rounded shadow-lg"
              />
            </div>
          ))}
        </Slider>
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
