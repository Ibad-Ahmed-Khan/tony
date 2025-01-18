import React from "react";
import AdobeLogo from "../../assets/adobe.png"; // Path to Adobe logo image
import { FaApple, FaSketch, FaFigma, FaPaintBrush } from "react-icons/fa";
import IconSlider from "../../components/IconSlider";

const GraphicDesign = () => {
  const services = [
    {
      icon: <FaPaintBrush size={50} color="purple" />,
      title: "Branding & Logo Design",
      description:
        "Create a strong brand identity with custom logos and branding materials that represent your business values.",
    },
    {
      icon: (
        <img
          src={AdobeLogo}
          alt="Adobe Creative Suite"
          style={{ width: "50px", height: "50px" }}
        />
      ),
      title: "Adobe Creative Suite",
      description:
        "Utilize Adobe tools like Photoshop, Illustrator, and InDesign to craft high-quality designs for print and web.",
    },
    {
      icon: <FaSketch size={50} color="black" />,
      title: "Web & App Design",
      description:
        "Design intuitive and user-friendly interfaces for websites and mobile apps that engage users.",
    },
    {
      icon: <FaFigma size={50} color="blue" />,
      title: "UI/UX Design",
      description:
        "Create visually appealing and functional designs with Figma, focusing on the user experience and interface.",
    },
    {
      icon: <FaApple size={50} color="gray" />,
      title: "Apple Design Standards",
      description:
        "Design user interfaces and experiences that align with Apple's design principles for iOS applications.",
    },
  ];

  const technologies = [
    {
      icon: (
        <img
          src={AdobeLogo}
          alt="Adobe Photoshop"
          style={{ width: "50px", height: "50px" }}
        />
      ),
      name: "Adobe Photoshop",
    },
    {
      icon: <FaApple size={50} color="gray" />,
      name: "Apple macOS",
    },
    {
      icon: <FaSketch size={50} color="black" />,
      name: "Sketch",
    },
    {
      icon: <FaFigma size={50} color="blue" />,
      name: "Figma",
    },
  ];

  return (
    <div className="container py-5 logo-text">
      {/* Section 1: Introduction */}
      <div className="text-center mb-5">
        <h1 className="display-4 text-teal">
          Professional Graphic Design Services
        </h1>
        <p className="lead mx-auto" style={{ maxWidth: "900px" }}>
          Our graphic design services help businesses create visually appealing
          and effective marketing materials. From branding to web and app
          design, we bring your vision to life.
        </p>
        <button className="btn-teal btn-lg">Get a Quote</button>
      </div>

      {/* Section 2: Services */}
      <div className="mb-5">
        <h2 className="text-center text-teal mb-4">
          Our Graphic Design Services
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
        <h2 className="text-center text-teal mb-4">Technologies We Use</h2>
        <IconSlider technologies={technologies} />
      </div>

      {/* Section 4: Call to Action */}
      <div className="text-center">
        <h2 className="display-4 text-teal">Ready to Elevate Your Brand?</h2>
        <p
          className="lead text-secondary mx-auto"
          style={{ maxWidth: "900px" }}
        >
          Whether you need a brand new logo, a complete rebranding, or a
          beautiful web design, we’re here to help. Let’s start creating
          something amazing together!
        </p>
        <Link to="/contact" className="btn-teal btn-lg">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default GraphicDesign;
