import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logoTony.png";
import "../styles/custom.css"; // Import the custom CSS

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get the current route

  const Links = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Services", url: "/services" },
    { name: "Team", url: "/team" },
    { name: "Contact", url: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  return (
    <header className="header logo-text ">
      <Link
        className="header-logo text-white mt-2 header-link"
        to="/"
        onClick={handleScrollToTop}
      >
        <div
          className="flex-center "
          style={{
            marginTop: "0.5rem",
          }}
        >
          <span
            className="fw-bold "
            style={{
              marginTop: "0.2rem",
              minWidth: "1rem",
              minHeight: "5px",
              background: "#2ad87f",
              opacity: "0.4",
            }}
          />
          <h2 className="text-lg">Digital Fue</h2>
        </div>
      </Link>
      {/* <div className={`overlay  ${isMenuOpen ? "rotate" : ""}`} /> */}
      <button
        className={`menu-toggle  text-white ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span className={`hamburger-icon ${isMenuOpen ? "rotate" : ""}`}>
          {isMenuOpen ? "✖" : "☰"}
        </span>
      </button>
      <nav className={`header-links ${isMenuOpen ? "open" : ""}`}>
        {Links.map((item, index) => (
          <Link
            key={index}
            className={`header-link ${
              location.pathname === item.url ? "active" : ""
            }`}
            to={item.url}
            onClick={() => {
              toggleMenu();
              handleScrollToTop();
            }}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
