import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaJsSquare,
} from "react-icons/fa";
import Slider from "react-slick";
import IconSlider from "../../components/IconSlider";
import { Link } from "react-router-dom";

const WebDevelopment = () => {
  const services = [
    {
      icon: <FaHtml5 size={50} color="darkorange" />,
      title: "Custom Website Design",
      description:
        "We create beautiful, responsive, and user-friendly websites that align with your brand’s identity and business goals.",
    },
    {
      icon: <FaReact size={50} color="cyan" />,
      title: "E-Commerce Solutions",
      description:
        "Build an online store with secure payment gateways, easy-to-use dashboards, and excellent customer experience features.",
    },
    {
      icon: <FaNodeJs size={50} color="green" />,
      title: "Web App Development",
      description:
        "From interactive forms to advanced web applications, we develop customized solutions to enhance business efficiency.",
    },
  ];

  const technologies = [
    { icon: <FaHtml5 size={50} color="darkorange" />, name: "HTML5" },
    { icon: <FaCss3Alt size={50} color="blue" />, name: "CSS3" },
    { icon: <FaReact size={50} color="cyan" />, name: "React" },
    { icon: <FaNodeJs size={50} color="green" />, name: "Node.js" },
    { icon: <FaDatabase size={50} color="gray" />, name: "MongoDB" },
    { icon: <FaJsSquare size={50} color="yellow" />, name: "JavaScript" },
  ];

  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "A fully functional e-commerce platform with secure payment options, real-time inventory updates, and user-friendly UI.",
      img: "https://via.placeholder.com/600x400",
    },
    {
      title: "Corporate Website",
      description:
        "A professional website for a leading corporate firm, featuring service pages, blogs, and a client portal.",
      img: "https://via.placeholder.com/600x400",
    },
  ];

  const testimonials = [
    {
      text: "The web development team at [Your Company] exceeded our expectations! Our new website is user-friendly, and our traffic has increased significantly.",
      name: "Jane Doe, CEO, Example Corp",
    },
    {
      text: "Thanks to [Your Company], our e-commerce platform is now performing better than ever. We saw a 40% increase in sales within the first three months!",
      name: "John Smith, Founder, ShopMaster",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container py-5 logo-text">
      {/* Section 1: Introduction */}
      <div className="text-center mb-5">
        <h1 className="display-4 text-teal">
          Professional Web Development Services
        </h1>
        <p className="lead mx-auto" style={{ maxWidth: "900px" }}>
          At [Your Company], we specialize in crafting visually appealing,
          functional, and high-performing websites tailored to your business
          needs. Whether you're a startup, a small business, or an enterprise,
          we deliver top-quality web solutions to bring your ideas to life.
        </p>
        <button className="btn-teal btn-lg">Get a Quote</button>
      </div>

      {/* Section 2: Services */}
      <div className="mb-5">
        <h2 className="text-center text-teal mb-4">
          Our Web Development Services
        </h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {services.map((service, index) => (
            <div key={index} className="col">
              <div className="card text-center">
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
        {/* Section 3: Technologies Used (Slider) */}
        <IconSlider technologies={technologies} />
      </div>

      {/* Section 4: Project Examples */}
      <div className="mb-5">
        <h2 className="text-center text-teal mb-4">Our Recent Projects</h2>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {projects.map((project, index) => (
            <div key={index} className="col">
              <div className="card">
                <img
                  src={project.img}
                  className="card-img-top"
                  alt={`Project ${index + 1}`}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text text-secondary">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 5: Testimonials */}
      <div className="mb-5 bg-light p-4 rounded">
        <h2 className="text-center text-teal mb-4">What Our Clients Say</h2>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col">
              <div className="card">
                <div className="card-body">
                  <p className="card-text text-secondary">{testimonial.text}</p>
                  <p className="font-weight-bold">{testimonial.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 6: Call to Action */}
      <div className="text-center">
        <h2 className="display-4 text-teal">Ready to Get Started?</h2>
        <p
          className="lead text-secondary mx-auto"
          style={{ maxWidth: "900px" }}
        >
          Contact us today to discuss how we can create a stunning and
          functional website that will elevate your online presence and
          business.
        </p>
        <Link to="/contact" className="btn-teal btn-lg">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default WebDevelopment;
