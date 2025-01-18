import React from "react";
import {
  FaMobileAlt,
  FaCode,
  FaDatabase,
  FaReact,
  FaAndroid,
  FaApple,
  FaNodeJs,
  FaJsSquare,
} from "react-icons/fa";
import IconSlider from "../../components/IconSlider";
import { Link } from "react-router-dom";

const AppDevelopment = () => {
  // Define the mobile app development services as an array
  const services = [
    {
      icon: <FaMobileAlt size={50} color="blue" />,
      title: "Custom Mobile App Development",
      description:
        "We create custom mobile apps that provide a seamless user experience and drive engagement for your business.",
    },
    {
      icon: <FaAndroid size={50} color="green" />,
      title: "Android App Development",
      description:
        "Specialized in building feature-rich, native Android apps for a smooth user experience.",
    },
    {
      icon: <FaApple size={50} color="black" />,
      title: "iOS App Development",
      description:
        "Design and develop custom iOS apps that work seamlessly with Apple's ecosystem and offer optimal performance.",
    },
    {
      icon: <FaNodeJs size={50} color="green" />,
      title: "Backend Services for Apps",
      description:
        "Provide backend solutions for mobile apps, ensuring smooth data management and real-time features.",
    },
  ];

  // Define the technologies used for mobile app development as an array
  const technologies = [
    {
      icon: <FaReact size={50} color="cyan" />,
      name: "React Native",
    },
    {
      icon: <FaNodeJs size={50} color="green" />,
      name: "Node.js",
    },
    {
      icon: <FaJsSquare size={50} color="yellow" />,
      name: "JavaScript",
    },
    {
      icon: <FaDatabase size={50} color="gray" />,
      name: "MongoDB",
    },
    {
      icon: <FaCode size={50} color="teal" />,
      name: "API Development",
    },
  ];

  return (
    <div className="container py-5 logo-text">
      {/* Section 1: Introduction */}
      <div className="text-center mb-5">
        <h1 className="display-4 text-teal">
          Professional Mobile App Development Services
        </h1>
        <p className="lead mx-auto" style={{ maxWidth: "900px" }}>
          At [Your Company], we specialize in creating high-performance mobile
          apps for both Android and iOS. Our solutions are built to scale and
          meet the unique needs of your business, whether you're looking to
          create an engaging user experience or add new functionality to your
          app.
        </p>
        <button className=" btn-teal btn-lg">Get a Quote</button>
      </div>

      {/* Section 2: Services */}
      <div className="mb-5">
        <h2 className="text-center text-teal mb-4">
          Our Mobile App Development Services
        </h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
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

      {/* Section 3: Technologies */}
      <div className="container py-5">
        {/* Section 3: Technologies Used (Slider) */}
        <IconSlider technologies={technologies} />
      </div>

      {/* Section 4: Call to Action */}
      <div className="text-center">
        <h2 className="display-4 text-teal">Ready to Get Started?</h2>
        <p
          className="lead text-secondary mx-auto"
          style={{ maxWidth: "900px" }}
        >
          Let's discuss your mobile app project and start building something
          amazing. Reach out to us today to get started!
        </p>

        <Link to="/contact" className="btn-teal btn-lg">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default AppDevelopment;
