import React from "react";
import { Link } from "react-router-dom";
import One from "../assets/imgs/one.jpeg";
import Two from "../assets/imgs/two.jpeg";
import Three from "../assets/imgs/three.jpeg";
import Four from "../assets/imgs/four.jpeg";
import Five from "../assets/imgs/five.jpeg";
import Six from "../assets/imgs/six.jpeg";
import Seven from "../assets/imgs/seven.jpeg";
import Eight from "../assets/imgs/eight.jpeg";

const services = [
  {
    title: "Website Development",
    description:
      "Create high-performing, responsive websites tailored to your business needs.",
    icon: "bi bi-code-slash", // Bootstrap Icon for coding
    img: One, // Updated image path
    path: "/website-development", // Path for redirect
  },
  {
    title: "App Development",
    description:
      "Custom mobile app solutions to elevate your business efficiency and user experience.",
    icon: "bi bi-phone", // Bootstrap Icon for a phone
    img: Two, // Updated image path
    path: "/app-development", // Path for redirect
  },
  {
    title: "Digital Marketing",
    description:
      "Drive traffic and boost your online presence with expert digital marketing strategies.",
    icon: "bi bi-bullseye", // Bootstrap Icon for a target
    img: Three, // Updated image path
    path: "/digital-marketing", // Path for redirect
  },
  {
    title: "Website Maintenance",
    description:
      "Ensure your website stays secure, fast, and up-to-date with regular maintenance services.",
    icon: "bi bi-tools", // Bootstrap Icon for tools
    img: Four, // Updated image path
    path: "/website-maintenance", // Path for redirect
  },
  {
    title: "Graphic Design",
    description:
      "Bring your vision to life with eye-catching designs for your brand.",
    icon: "bi bi-palette", // Bootstrap Icon for a palette
    img: Five, // Updated image path (can be changed to another one)
    path: "/graphic-design", // Path for redirect
  },
  {
    title: "Domain & Hosting",
    description:
      "Reliable domain registration and hosting services to get your website online.",
    icon: "bi bi-server", // Bootstrap Icon for server
    img: Six, // Updated image path (can be changed to another one)
    path: "/domain-hosting", // Path for redirect
  },
  {
    title: "Shopify Ecommerce",
    description:
      "Create and manage your online store with ease using Shopify's powerful tools.",
    icon: "bi bi-cart", // Bootstrap Icon for shopping cart
    img: Seven, // Updated image path (can be changed to another one)
    path: "/shopify-ecommerce", // Path for redirect
  },

  {
    title: "Travel Agency",
    description:
      "Discover amazing travel packages and book your next service adventure.",
    icon: "bi bi-airplane-engines", // Bootstrap Icon for airplane
    img: Eight, // Updated image path (can be changed to another one)
    path: "/travel-agency-services", // Path for redirect
  },
];

const handleScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scrolling effect
  });
};

const Services = () => {
  return (
    <div>
      <div className="flex-center flex-column main-color-2 component-h logo-text my-5">
        <div className="text-center mb-5">
          <h1 className="display-4">Our Services</h1>
          <p
            style={{
              maxWidth: "900px",
              color: "#fff",
              fontSize: "1rem",
              paddingInline: "1rem",
            }}
            className="lead mx-auto text-xs "
          >
            We offer a wide range of services to meet the diverse needs of our
            clients. Whether you need website development, digital marketing, or
            travel services, we have the expertise to help your business grow
            and thrive.
          </p>
        </div>

        <div className="flex-center flex-wrap gap-4">
          {services.map((service, index) => (
            <Link
              onClick={handleScrollToTop}
              to={service.path}
              key={index}
              className="services-card flex-center flex-column  text-decoration-none"
              style={{
                backgroundColor: "var(--main-color-1)",
                border: "1px solid var(--main-color-2)",
                borderRadius: "8px",
                padding: "20px",
                width: "300px",
                boxShadow: `0px 2px 8px rgba(44, 216, 127, 0.2)`,
                transition: "transform 0.3s, box-shadow 0.3s",
                position: "relative", // Ensure the icon can be positioned on top
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-5px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              {/* Icon Button */}
              <Link
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontSize: "2.5rem",
                  color: "var(--main-color-2)",
                  cursor: "pointer",
                }}
              >
                <i className={service.icon}></i>
              </Link>
              <Link to={service.path}>
                <i
                  className="bi bi-box-arrow-up-right"
                  style={{
                    borderRadius: "0.5rem",
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    color: "var(--main-color-2)",
                    cursor: "pointer",
                  }}
                ></i>
              </Link>
              {/* Title */}
              <h3
                className="card-title"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "var(--text-color)", // White text
                  marginBlock: "1rem",
                }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="card-description"
                style={{
                  fontSize: "1rem",
                  color: "#ddd", // Lighter color for description
                  marginBottom: "15px",
                }}
              >
                {service.description}
              </p>

              {/* Image */}
              <img
                src={service.img}
                alt={service.title}
                style={{
                  width: "100%",
                  maxHeight: "12rem",
                  borderRadius: "5px",
                  marginTop: "10px",
                }}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
