import React, { useEffect } from "react";
import "./css_files/Education.css";

export default function Education() {

  useEffect(() => {
    const handleScroll = () => {
      const eduSection = document.getElementById("Education");

      if (eduSection) {
        const rect = eduSection.getBoundingClientRect();

        // Add "show" when section is in view
        if (rect.top < window.innerHeight * 0.5 && rect.bottom > 0) {
          eduSection.classList.add("show");
        } else {
          eduSection.classList.remove("show");
        }
      }
    };

    // Run once on load
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="Education" className="edu-section">
      <h2 className="edu-title">Education</h2>
      <p className="edu-subtitle">
        My education has been a journey of growth and technical excellence.
      </p>

      <div className="timeline-container">
        <div className="edu-wrapper">

          <div className="edu-card">
            <div className="edu-header">
              <h3>Indian Institute of Information Technology, Una</h3>
              <span className="edu-year-badge">2023 – 27</span>
            </div>
            <p className="edu-degree">
              B.Tech – Computer Science & Engineering
            </p>
            <p className="edu-grade">CGPA: 8.13 (Current)</p>
            <span className="timeline-segment"></span>
          </div>

          <div className="edu-card">
            <div className="edu-header">
              <h3>DAV Public School, Khagaul, Patna, Bihar</h3>
              <span className="edu-year-badge">2022</span>
            </div>
            <p className="edu-degree">
              Senior Secondary – PCM (CBSE)
            </p>
            <p className="edu-grade">Percentage: 94.5%</p>
            <span className="timeline-segment"></span>
          </div>

          <div className="edu-card">
            <div className="edu-header">
              <h3>DAV Public School, Khagaul, Patna, Bihar</h3>
              <span className="edu-year-badge">2020</span>
            </div>
            <p className="edu-degree">
              Secondary – CBSE
            </p>
            <p className="edu-grade">Percentage: 95.8%</p>
            <span className="timeline-segment"></span>
          </div>

        </div>
      </div>
    </section>
  );
}