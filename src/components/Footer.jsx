import React from "react";
import "./css_files/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <h2 className="footer-logo">Ujjwal Kumar</h2>

        <p className="footer-tagline">
          Building futuristic web experiences ✨
        </p>

        <div className="footer-links">
          <a href="#top">Home</a>
          <a href="#aboutmemain">About</a>
          <a href="#Education">Education</a>
          <a href="#skills-section">Skills</a>
          <a href="#projects-section">Projects</a>
          <a href="#ContactUs">Contact</a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Ujjwal Kumar. All rights reserved.
        </p>

      </div>
    </footer>
  );
}