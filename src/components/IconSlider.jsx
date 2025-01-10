import React from "react";
import Slider from "react-slick";

// IconSlider Component
const IconSlider = ({ technologies }) => {
  // Slider settings (same everywhere)
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    arrows: false,
    dots: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container py-5">
      {/* Section: Technologies Used (Slider) */}
      <div className="mb-5">
        <h2 className="text-center text-teal mb-4">Technologies We Use</h2>
        <div className="slider-wrapper" style={{ overflow: "hidden" }}>
          <Slider {...settings}>
            {technologies.map((tech, index) => (
              <div key={index} className="text-center py-5">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {tech.icon}
                  <p className="text-secondary mt-2">{tech.name}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default IconSlider;
