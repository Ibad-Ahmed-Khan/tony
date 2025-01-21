import React, { useState, useEffect } from "react";
import "../styles/custom.css";

const AnimatedText = () => {
  const phrases = [
    "Your Trusted Travel Consultant.",
    "Experienced Web Developer.",
    "WordPress & Shopify Experts.",
    "Innovative Web Solutions.",
  ];

  const [text, setText] = useState(""); // Current text to display
  const [isDeleting, setIsDeleting] = useState(false); // Typing or deleting
  const [phraseIndex, setPhraseIndex] = useState(0); // Current phrase index
  const [speed, setSpeed] = useState(100); // Typing speed

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const typingEffect = () => {
      if (isDeleting) {
        setText((prev) => prev.slice(0, -1)); // Remove characters
        setSpeed(50); // Faster deleting speed
      } else {
        setText((prev) => currentPhrase.slice(0, prev.length + 1)); // Add characters
        setSpeed(100); // Normal typing speed
      }

      // When phrase is fully typed
      if (!isDeleting && text === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      }

      // When phrase is fully deleted
      if (isDeleting && text === "") {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length); // Move to the next phrase
      }
    };

    const timer = setTimeout(typingEffect, speed); // Adjust speed dynamically
    return () => clearTimeout(timer); // Cleanup timeout
  }, [text, isDeleting, phrases, phraseIndex, speed]);

  return (
    <span id="animated-text" style={{ minHeight: "1.6rem" }}>
      {text}
    </span>
  );
};

export default AnimatedText;
