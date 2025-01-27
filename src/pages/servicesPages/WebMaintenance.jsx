import React from "react";
import {
  FaWordpress,
  FaLinux,
  FaAws,
  FaCloud,
  FaShieldAlt,
  FaGoogle,
  FaServer,
  FaTools,
  FaHeadset,
  FaCogs,
} from "react-icons/fa";
import IconSlider from "../../components/IconSlider";
import { Link } from "react-router-dom";

const WebMaintenance = () => {
  // Define the services for web maintenance
  const services = [
    {
      icon: <FaServer size={50} color="green" />,
      title: "Server Maintenance",
      description:
        "Ensure your web servers are running smoothly and securely with our server maintenance services.",
    },
    {
      icon: <FaTools size={50} color="blue" />,
      title: "Bug Fixes and Updates",
      description:
        "Regular updates and bug fixes to ensure your website stays current and error-free.",
    },
    {
      icon: <FaCloud size={50} color="orange" />,
      title: "Cloud Services",
      description:
        "Manage and optimize your cloud hosting services to provide better performance and scalability.",
    },
    {
      icon: <FaHeadset size={50} color="purple" />,
      title: "Customer Support",
      description:
        "Provide 24/7 customer support to address any issues or concerns your visitors may have.",
    },
    {
      icon: <FaShieldAlt size={50} color="red" />,
      title: "Security Monitoring",
      description:
        "Protect your website with constant monitoring for potential threats and vulnerabilities.",
    },
    {
      icon: <FaCogs size={50} color="gray" />,
      title: "Performance Optimization",
      description:
        "Optimize your website’s speed and functionality to provide a seamless user experience.",
    },
  ];

  // Define technologies used for web maintenance (actual technologies/tools)
  const technologies = [
    {
      icon: <FaWordpress size={50} color="blue" />,
      name: "WordPress",
    },
    {
      icon: <FaLinux size={50} color="black" />,
      name: "Linux Servers",
    },
    {
      icon: <FaAws size={50} color="orange" />,
      name: "AWS (Amazon Web Services)",
    },
    {
      icon: <FaGoogle size={50} color="blue" />,
      name: "Google Cloud",
    },
    {
      icon: <FaShieldAlt size={50} color="red" />,
      name: "Security Tools",
    },
    {
      icon: <FaCloud size={50} color="skyblue" />,
      name: "Cloudflare",
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
        <h1 className="display-4 text-teal">
          Professional Web Maintenance Services
        </h1>
        <p className="lead mx-auto" style={{ maxWidth: "900px" }}>
          Our web maintenance services ensure your website is secure, fast, and
          up-to-date. Whether you need server management, bug fixes, or
          performance optimization, we’ve got you covered.
        </p>
        <button className="btn-teal btn-lg">Get a Quote</button>
      </div>

      {/* Section 2: Services */}
      <div className="mb-5">
        <h2 className="text-center text-teal mb-4">
          Our Web Maintenance Services
        </h2>
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
        {/* Section 3: Technologies (Slider) */}
        <IconSlider technologies={technologies} />
      </div>

      {/* Section 4: Call to Action */}
      <div className="text-center">
        <h2 className="display-4 text-teal">
          Ready to Keep Your Website Running Smoothly?
        </h2>
        <p
          className="lead text-secondary mx-auto"
          style={{ maxWidth: "900px" }}
        >
          Reach out to us today to ensure your website is always performing at
          its best with our web maintenance services.
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

export default WebMaintenance;
