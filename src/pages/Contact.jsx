import React from "react";
import { useForm } from "react-hook-form";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  // Initialize useForm from react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Form submission handler
  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  return (
    <div className="container py-5">
      {/* Section: Contact Header */}
      <div className="text-center mb-5">
        <h1 className="display-4 text-teal">Get in Touch</h1>
        <p className="lead mx-auto" style={{ maxWidth: "800px" }}>
          We'd love to hear from you! Fill out the form below or reach out to us
          via phone or email. Our team is here to assist you.
        </p>
      </div>

      {/* Section: Contact Form and Details */}
      <div className="row g-4">
        {/* Contact Form */}
        <div className="col-md-6">
          <div className="animated-border card p-4 shadow-sm">
            <h4 className="text-teal mb-3">Contact Form</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Full Name */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  {...register("name", { required: "Full Name is required" })}
                />
                {errors.name && (
                  <p
                    style={{ color: "var(--main-color-2)", fontSize: "0.8rem" }}
                  >
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                      message: "Invalid email format",
                    },
                  })}
                />
                {errors.email && (
                  <p
                    style={{ color: "var(--main-color-2)", fontSize: "0.8rem" }}
                  >
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Type your message here"
                  {...register("message", { required: "Message is required" })}
                ></textarea>
                {errors.message && (
                  <p
                    style={{ color: "var(--main-color-2)", fontSize: "0.8rem" }}
                  >
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button type="submit" className="btn-teal btn-lg w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Contact Details */}
        <div className="col-md-6">
          <div className="animated-border card p-4 shadow-sm">
            <h4 className="text-teal mb-3">Contact Information</h4>
            <ul className="list-unstyled">
              <li className="mb-3 d-flex align-items-center">
                <FaPhoneAlt className="me-3 text-teal" size={20} />
                <span>(+123) 456-7890</span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <FaEnvelope className="me-3 text-teal" size={20} />
                <span>support@example.com</span>
              </li>
              <li className="d-flex align-items-center">
                <FaMapMarkerAlt className="me-3 text-teal" size={20} />
                <span>123 Main Street, City, Country</span>
              </li>
            </ul>
            <div className="mt-4">
              <h6>Office Hours</h6>
              <p className="text-secondary">
                Monday - Friday: 9:00 AM - 6:00 PM
                <br />
                Saturday - Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
