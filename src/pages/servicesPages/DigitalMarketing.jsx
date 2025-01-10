import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaPinterest,
  FaSnapchat,
} from "react-icons/fa";
import IconSlider from "../../components/IconSlider";
import Google from "../../assets/google.png";

const DigitalMarketing = () => {
  const services = [
    {
      icon: (
        <div>
          <img src={Google} alt="Google" />
        </div>
      ),
      title: "Search Engine Optimization (SEO)",
      description:
        "Optimize your website to rank higher in search engine results and drive organic traffic.",
    },
    {
      icon: <FaFacebook size={50} color="blue" />,
      title: "Facebook Advertising",
      description:
        "Target the right audience on Facebook with tailored ad campaigns that convert.",
    },
    {
      icon: <FaTwitter size={50} color="skyblue" />,
      title: "Twitter Marketing",
      description:
        "Increase brand awareness and engagement with Twitter's fast-paced, real-time platform.",
    },
    {
      icon: <FaInstagram size={50} color="purple" />,
      title: "Instagram Marketing",
      description:
        "Leverage visually engaging posts, stories, and ads to connect with a broader audience.",
    },
    {
      icon: <FaLinkedin size={50} color="blue" />,
      title: "LinkedIn Marketing",
      description:
        "Generate high-quality leads and grow your professional network with targeted LinkedIn campaigns.",
    },
    {
      icon: <FaYoutube size={50} color="red" />,
      title: "YouTube Advertising",
      description:
        "Create video ads that capture attention and drive results on the world's second-largest search engine.",
    },
    {
      icon: <FaPinterest size={50} color="red" />,
      title: "Pinterest Marketing",
      description:
        "Reach a creative, visually-driven audience and drive traffic through visually appealing pins.",
    },
    {
      icon: <FaSnapchat size={50} color="yellow" />,
      title: "Snapchat Ads",
      description:
        "Tap into younger demographics with engaging, immersive ads on Snapchat's platform.",
    },
  ];

  // Define the platforms used for digital marketing as an array
  const platforms = [
    {
      icon: (
        <div
          style={{
            background:
              "linear-gradient(45deg, #4285F4, #34A853, #FBBC05, #EA4335)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            display: "inline-block",
            padding: "10px",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            textAlign: "center",
          }}
        >
          <img
            src="/assets/google.png" // Path to your google.png image in the assets folder
            alt="Google"
            style={{
              width: "50px",
              height: "50px",
              objectFit: "contain",
              borderRadius: "50%", // Optional: to make the image circular
            }}
          />
        </div>
      ),
      name: "Google Ads",
    },
    {
      icon: <FaFacebook size={50} color="blue" />,
      name: "Facebook Ads",
    },
    {
      icon: <FaTwitter size={50} color="skyblue" />,
      name: "Twitter Ads",
    },
    {
      icon: <FaInstagram size={50} color="purple" />,
      name: "Instagram Ads",
    },
    {
      icon: <FaLinkedin size={50} color="blue" />,
      name: "LinkedIn Ads",
    },
    {
      icon: <FaYoutube size={50} color="red" />,
      name: "YouTube Ads",
    },
    {
      icon: <FaPinterest size={50} color="red" />,
      name: "Pinterest Ads",
    },
    {
      icon: <FaSnapchat size={50} color="yellow" />,
      name: "Snapchat Ads",
    },
  ];

  return (
    <div className="container py-5 logo-text">
      {/* Section 1: Introduction */}
      <div className="text-center mb-5">
        <h1 className="display-4 text-teal">
          Professional Digital Marketing Services
        </h1>
        <p className="lead mx-auto" style={{ maxWidth: "900px" }}>
          At [Your Company], we specialize in creating comprehensive digital
          marketing strategies to drive brand awareness, engagement, and sales.
          Whether you're looking to increase organic reach or run paid ad
          campaigns, we have the expertise to help your business succeed online.
        </p>
        <button className="btn-teal btn-lg">Get a Quote</button>
      </div>

      {/* Section 2: Services */}
      <div className="mb-5">
        <h2 className="text-center text-teal mb-4">
          Our Digital Marketing Services
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

      {/* Section 3: Platforms */}
      <div className="container py-5">
        {/* Section 3: Platforms Used (Slider) */}
        <IconSlider technologies={platforms} />
      </div>

      {/* Section 4: Call to Action */}
      <div className="text-center">
        <h2 className="display-4 text-teal">Ready to Get Started?</h2>
        <p
          className="lead text-secondary mx-auto"
          style={{ maxWidth: "900px" }}
        >
          Let's take your digital marketing efforts to the next level. Reach out
          to us today and start seeing real results!
        </p>
        <button className="btn-teal btn-lg">Contact Us</button>
      </div>
    </div>
  );
};

export default DigitalMarketing;
