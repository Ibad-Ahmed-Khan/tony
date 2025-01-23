import React from "react";

const Loader = () => {
  return (
    <div
      className="overlay"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(30, 36, 43, 0.9)", // Dim background
        zIndex: 9999, // Ensure it's above all elements
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "50px",
          height: "50px",
          border: "6px solid rgba(255, 255, 255, 0.2)", // Outer border
          borderTop: "6px solid #2cd87f", // Highlighted top border for spinner effect
          borderRadius: "50%",
          animation: "spin 1s linear infinite", // Spin animation
        }}
      ></div>
      {/* Optional loading text */}
      <p
        style={{
          marginTop: "16px",
          color: "#fff",
          fontSize: "1.2rem",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Loading...
      </p>
      {/* CSS for spin animation */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
