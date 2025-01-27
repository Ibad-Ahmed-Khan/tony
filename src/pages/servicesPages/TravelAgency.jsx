import React from "react";
import { FaGlobe, FaHotel, FaPlane, FaCar, FaBicycle } from "react-icons/fa";
import IconSlider from "../../components/IconSlider";
import { Link } from "react-router-dom";

const TravelAgency = () => {
  const services = [
    {
      icon: <FaGlobe size={50} color="blue" />,
      title: "Global Travel",
      description:
        "Explore destinations worldwide with our comprehensive travel packages that suit all preferences.",
    },
    {
      icon: <FaPlane size={50} color="skyblue" />,
      title: "Flight Booking",
      description:
        "Book flights with the best airlines and find the best deals on domestic and international flights.",
    },
    {
      icon: <FaHotel size={50} color="green" />,
      title: "Hotel Reservations",
      description:
        "Secure accommodations at the best hotels, resorts, and more, no matter where you go.",
    },
    {
      icon: <FaCar size={50} color="orange" />,
      title: "Car Rentals",
      description:
        "Get around easily with reliable car rental options that suit your travel needs.",
    },
    {
      icon: <FaBicycle size={50} color="purple" />,
      title: "Adventure Tours",
      description:
        "Experience thrilling adventure tours, from hiking to cycling trips, and make your vacation unforgettable.",
    },
  ];

  const technologies = [
    {
      icon: <FaGlobe size={50} color="blue" />,
      name: "Travel Booking Platforms",
    },
    {
      icon: <FaPlane size={50} color="skyblue" />,
      name: "Flight Reservation Systems",
    },
    {
      icon: <FaHotel size={50} color="green" />,
      name: "Hotel Booking Systems",
    },
    {
      icon: <FaCar size={50} color="orange" />,
      name: "Car Rental Systems",
    },
  ];

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="container py-5 logo-text">
      {/* Section 1: Introduction */}
      <div className="text-center mb-5">
        <h1 className="display-4 text-teal">Your Ultimate Travel Agency</h1>
        <p className="lead mx-auto" style={{ maxWidth: "900px" }}>
          From booking flights to arranging hotel stays and exciting tours, we
          provide everything you need to have an unforgettable trip.
        </p>
        <button className="btn btn-teal btn-lg">Start Your Journey</button>
      </div>

      {/* Section 2: Services */}
      <div className="mb-5">
        <h2 className="text-center text-teal mb-4">Our Travel Services</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {services.map((service, index) => (
            <div key={index} className="col">
              <div className="card flex-center" style={{ minHeight: "14rem" }}>
                <div className="card-body">
                  {service.icon}
                  <h5 className="card-title text-teal mt-3">{service.title}</h5>
                  <p className="card-text text-secondary">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: Technologies Used */}
      <div className="container py-5">
        <IconSlider technologies={technologies} />
      </div>

      {/* Section 4: Call to Action */}
      <div className="text-center">
        <h2 className="display-4 text-teal">Ready to Explore the World?</h2>
        <p
          className="lead text-secondary mx-auto"
          style={{ maxWidth: "900px" }}
        >
          Start planning your dream trip with us today. From flights to
          accommodations, we handle all the details!
        </p>
        <Link
          to="/contact"
          className="btn-teal btn-lg logo-text"
          onClick={handleScrollToTop}
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default TravelAgency;
