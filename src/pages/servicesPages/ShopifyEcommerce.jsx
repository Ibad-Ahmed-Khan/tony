import React from "react";
import { FaShoppingCart, FaStore, FaTruck, FaBox } from "react-icons/fa";
import IconSlider from "../../components/IconSlider";

const ShopifyEcommerce = () => {
  const services = [
    {
      icon: <FaStore size={50} color="blue" />,
      title: "Store Setup",
      description:
        "Create and launch your online store with Shopify's powerful tools tailored to your business.",
    },
    {
      icon: <FaShoppingCart size={50} color="green" />,
      title: "Product Management",
      description:
        "Easily manage and showcase your products with user-friendly inventory solutions.",
    },
    {
      icon: <FaTruck size={50} color="skyblue" />,
      title: "Shipping Integration",
      description:
        "Seamlessly integrate shipping options for smooth order fulfillment and tracking.",
    },
    {
      icon: <FaBox size={50} color="purple" />,
      title: "Custom Themes",
      description:
        "Choose from beautiful themes or create custom designs to match your brand.",
    },
  ];

  const technologies = [
    {
      icon: <FaStore size={50} color="blue" />,
      name: "Storefront Design",
    },
    {
      icon: <FaShoppingCart size={50} color="green" />,
      name: "Inventory Management",
    },
    {
      icon: <FaTruck size={50} color="skyblue" />,
      name: "Shipping Services",
    },
    {
      icon: <FaBox size={50} color="purple" />,
      name: "Custom Integrations",
    },
  ];

  return (
    <div className="container py-5 logo-text">
      {/* Section 1: Introduction */}
      <div className="text-center mb-5">
        <h1 className="display-4 text-teal">
          Seamless Shopify eCommerce Services
        </h1>
        <p className="lead mx-auto" style={{ maxWidth: "900px" }}>
          Our Shopify eCommerce solutions empower you to create, manage, and
          grow your online store. From setup to shipping, we’ve got you covered.
        </p>
        <button className="btn-teal btn-lg">Start Your Store</button>
      </div>

      {/* Section 2: Services */}
      <div className="mb-5">
        <h2 className="text-center text-teal mb-4">Our Shopify Services</h2>
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

      {/* Section 3: Technologies Used */}
      <div className="container py-5">
        <IconSlider technologies={technologies} />
      </div>

      {/* Section 4: Call to Action */}
      <div className="text-center">
        <h2 className="display-4 text-teal">
          Ready to Build Your Online Store?
        </h2>
        <p
          className="lead text-secondary mx-auto"
          style={{ maxWidth: "900px" }}
        >
          Let us help you set up, customize, and optimize your Shopify store for
          success. Start building your eCommerce dream today!
        </p>
        <Link to="/contact" className="btn-teal btn-lg">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default ShopifyEcommerce;
