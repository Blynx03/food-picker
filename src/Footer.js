import React from "react";
import "./App.css";

const Footer = () => {
  return (
    <div className="footer-container">
      Copyright: {new Date().getFullYear()} - The Dreamer{" "}
      <span className="material-symbols-outlined rocket-icon">
        rocket_launch
      </span>
    </div>
  );
};

export default Footer;
