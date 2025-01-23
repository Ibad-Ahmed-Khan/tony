import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "emailjs-com";
import { Spinner, useToast } from "@chakra-ui/react";

const Contact = () => {
  const toast = useToast();

  // Initialize useForm from react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // Added reset to clear form
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  // Form submission handler
  const onSubmit = (data, e) => {
    e.preventDefault(); // Prevent the default form submission
    setIsLoading(true); // Set loading state to true when form submission starts

    // Send form data using EmailJS
    emailjs
      .sendForm(
        "service_4y6u0e9", // Your service ID
        "template_r7nx0ah", // Your template ID
        e.target, // Pass the HTML form element instead of 'data'
        "Vc_UrR3Ehm2OYCrms" // Your user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          toast({
            position: "top-right",
            title: "Digital Fue!",
            description:
              "Thank you for contacting us! We’ll will respond shortly.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          reset(); // Reset the form after successful submission
          setIsLoading(false); // Set loading state to false after success
        },
        (error) => {
          console.log(error.text);
          toast({
            position: "top-right",
            title: "Ooops",
            description: "There was an error submitting the form.",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
          setIsLoading(false); // Set loading state to false after error
        }
      );
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent default form submission on Enter
      document.querySelector("button[type='submit']").click(); // Trigger the submit button
    }
  };

  return (
    <div className="container py-5 logo-text">
      {/* Section: Contact Header */}
      <div className="text-center mb-5">
        <h1 className="display-4 text-teal">Get in Touch</h1>
        <p
          className="lead mx-auto"
          style={{ maxWidth: "900px", color: "#fff", fontSize: "1rem" }}
        >
          We'd love to hear from you! Fill out the form below or reach out to us
          via phone or email. Our team is here to assist you.
        </p>
      </div>

      {/* Section: Contact Form and Details */}
      <div className="row g-4">
        {/* Contact Form */}
        <div className="col-md-6">
          <div className=" card p-4 shadow-sm">
            <h4 className="text-teal mb-3">Contact Form</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Full Name */}
              <div className="mb-3">
                <label htmlFor="full_name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="full_name"
                  name="full_name" // Updated name to match EmailJS template variable
                  placeholder="Enter your name"
                  {...register("full_name", {
                    required: "Full Name is required",
                  })}
                />
                {errors.full_name && (
                  <p style={{ color: "red", fontSize: "0.7rem" }}>
                    {errors.full_name.message}
                  </p>
                )}
              </div>
              {/* Email Address */}
              <div className="mb-3">
                <label htmlFor="email_address" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email_address"
                  name="email_address" // Updated name to match EmailJS template variable
                  placeholder="Enter your email"
                  {...register("email_address", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                      message: "Invalid email format",
                    },
                  })}
                />
                {errors.email_address && (
                  <p style={{ color: "red", fontSize: "0.7rem" }}>
                    {errors.email_address.message}
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
                  name="message" // No change needed here
                  rows="4"
                  placeholder="Type your message here"
                  {...register("message", { required: "Message is required" })}
                ></textarea>
                {errors.message && (
                  <p style={{ color: "red", fontSize: "0.7rem" }}>
                    {errors.message.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="btn-teal btn-lg w-100"
                style={{
                  minHeight: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                disabled={isLoading} // Disable the button while loading
              >
                {isLoading ? (
                  <Spinner size="sm" color="white" />
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Contact Details */}
        <div className="col-md-6">
          <div className=" card p-4 shadow-sm">
            <h4 className="text-teal mb-3">Contact Information</h4>
            <ul className="list-unstyled">
              <li className="mb-3 d-flex align-items-center">
                <FaPhoneAlt className="me-3 text-teal" size={20} />
                <span className="text-black ">(+123) 456-7890</span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <FaEnvelope className="me-3 text-teal" size={20} />
                <span className="text-black ">support@example.com</span>
              </li>
              <li className="d-flex align-items-center">
                <FaMapMarkerAlt className="me-3 text-teal" size={20} />
                <span className="text-black ">
                  123 Main Street, City, Country
                </span>
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
