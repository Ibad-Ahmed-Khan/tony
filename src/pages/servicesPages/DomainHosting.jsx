import React from "react";
import { FaServer, FaCloud, FaTools, FaDatabase, FaLock } from "react-icons/fa";
import IconSlider from "../../components/IconSlider";
import { Link } from "react-router-dom";

const DomainHosting = () => {
  const services = [
    {
      icon: <FaServer size={50} color="blue" />,
      title: "Web Hosting",
      description:
        "Reliable and scalable hosting solutions to ensure your website runs smoothly 24/7.",
    },
    {
      icon: <FaCloud size={50} color="skyblue" />,
      title: "Cloud Hosting",
      description:
        "Flexible cloud hosting for enhanced performance and scalability to meet your growing needs.",
    },
    {
      icon: <FaDatabase size={50} color="green" />,
      title: "Database Management",
      description:
        "Secure and efficient database management services to ensure your data is always safe and accessible.",
    },
    {
      icon: <FaLock size={50} color="red" />,
      title: "SSL Certificates",
      description:
        "SSL certificates to secure your website and ensure the safety of your users’ data.",
    },
    {
      icon: <FaTools size={50} color="gray" />,
      title: "Website Maintenance",
      description:
        "Ongoing maintenance and support to ensure your website is always up to date and running at peak performance.",
    },
  ];

  const technologies = [
    {
      icon: <FaServer size={50} color="blue" />,
      name: "Linux Hosting",
    },
    {
      icon: <FaCloud size={50} color="skyblue" />,
      name: "AWS Cloud",
    },
    {
      icon: <FaDatabase size={50} color="green" />,
      name: "MySQL",
    },
    {
      icon: <FaLock size={50} color="red" />,
      name: "SSL Encryption",
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
          Reliable Domain Hosting Services
        </h1>
        <p className="lead mx-auto" style={{ maxWidth: "900px" }}>
          Our domain hosting services provide you with everything you need to
          run a successful website. From web hosting to database management and
          SSL certificates, we ensure your online presence is secure, fast, and
          scalable.
        </p>
        {/* <Link>Get Started</Link> */}

        <Link
          to="/contact"
          className="btn-teal btn-lg logo-text"
          onClick={handleScrollToTop}
        >
          Get Started
        </Link>
        {/* <button></button> */}
      </div>

      {/* Section 2: Services */}
      <div className="mb-5 ">
        <h2 className="text-center text-teal mb-4">
          Our Domain Hosting Services
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
        <IconSlider technologies={technologies} />
      </div>

      {/* Section 4: Call to Action */}
      <div className="text-center">
        <h2 className="display-4 text-teal">Ready to Launch Your Website?</h2>
        <p
          className="lead text-secondary mx-auto"
          style={{ maxWidth: "900px" }}
        >
          We provide top-tier hosting services with unmatched reliability and
          support. Let's get your website live today!
        </p>
        <button className=" btn-teal btn-lg">Get Started</button>
      </div>
    </div>
  );
};

export default DomainHosting;
