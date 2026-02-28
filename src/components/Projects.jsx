import React, { useEffect } from "react";
import "./css_files/projects.css";
import github from "./icons/github-94.png";
import extension1 from "../assets/extension1.png";
import alumni1 from "../assets/alumni1.png";
import jarvis from "../assets/jarvis.png";

const Projects = () => {
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("projects-section");
      if (section) {
        const rect = section.getBoundingClientRect();

        if (rect.top < window.innerHeight * 0.5 && rect.bottom > 0) {
          section.classList.add("show");
        } else {
          section.classList.remove("show");
        }
      }
    };

    handleScroll(); // Check once on mount

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="projects-section">
      <h2 className="projects-heading">Projects</h2>
      <div id="mydetails3">I love building meaningful web applications that solve real-world problems. From full-stack platforms to browser extensions and AI-based tools, each project reflects my passion for clean architecture, user-centric design, and efficient problem-solving.</div>
      <div className="projects-container">
        
        {/* Jarvis Extension */}
        <a
          href="https://github.com/ujjwal-kumar01/Jarvis-extension"
          target="_blank"
          rel="noopener noreferrer"
          className="github-icon-link"
        >
          <div className="project-card">
            <div className="image-wrapper">
              <img src={jarvis} alt="Jarvis AI Extension" className="project-image" />
            </div>

            <div className="project-content">
              <h3 className="text-xl font-semibold mb-2">Jarvis AI Chrome Extension</h3>
              <p className="text-justify">
                An AI-powered Chrome extension inspired by Jarvis that assists users
                directly in the browser. Perform smart searches, generate content,
                and boost productivity with quick AI responses in a clean,
                minimal interface.
              </p>
            </div>

            <img src={github} className="github-icon" alt="GitHub" />
            <div className="visit">Visit</div>
          </div>
        </a>
        
        {/* Alumni Connect */}
        <a
          href="https://github.com/ujjwal-kumar01/Alumni-Connect"
          target="_blank"
          rel="noopener noreferrer"
          className="github-icon-link"
        >
          <div className="project-card">
            <div className="image-wrapper">
              <img src={alumni1} alt="Alumni Connect" className="project-image" />
            </div>
            <div className="project-content">
              <h3 className="text-xl font-semibold mb-2">Alumni Connect</h3>
              <p className="text-justify">
                A full-stack platform enabling students to connect with alumni. Features include real-time chat,
                job board, resume uploads, filtering by company/year/location, and donation via Razorpay.
              </p>
            </div>
            <img src={github} className="github-icon" alt="GitHub" />
            <div className="visit">Visit</div>
          </div>
        </a>

        {/* Coding Extension */}
        <a
          href="https://github.com/ujjwal-kumar01/Coding_Extension"
          target="_blank"
          rel="noopener noreferrer"
          className="github-icon-link"
        >
          <div className="project-card">
            <div className="image-wrapper">
              <img src={extension1} alt="Coding Extension" className="project-image" />
            </div>
            <div className="project-content">
              <h3 className="text-xl font-semibold mb-2">Coding Chrome Extension</h3>
              <p className="text-justify">
                A Chrome extension for bookmarking coding questions across LeetCode, GFG, and Codeforces.
                Add notes, cross-links, and filter by topics with a clean searchable homepage.
              </p>
            </div>
            <img src={github} className="github-icon" alt="GitHub" />
            <div className="visit">Visit</div>
          </div>
        </a>

      </div>
    </section>
  );
};

export default Projects;
