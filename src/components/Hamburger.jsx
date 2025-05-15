import React, { useState } from "react";
import "./css_files/hamburger.css"; // Import CSS
import Navi from "./Nav"; // ✅ Import but don't render by default

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 🔹 Clickable Overlay (Closes Menu) */}
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}

      {/* 🍔 Hamburger / Close Icon */}
      <button
        className={`hamburger-btn ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div></div>
        <div></div>
        <div></div>
      </button>

      {/* 📜 Sliding Menu (Only Appears When Open) */}
      {isOpen && (
        <div className="hamburger-menu show">
          <button className="close-btn" onClick={() => setIsOpen(false)}>
            &times;
          </button>
          <Navi /> {/* ✅ Nav is only rendered when the menu is open */}
        </div>
      )}
    </>
  );
}

export default Hamburger;
