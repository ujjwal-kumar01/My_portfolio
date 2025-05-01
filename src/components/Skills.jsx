import React from 'react'
import "./Skills.css"
import { useEffect } from "react";

function Skills() {
    useEffect(() => {
        const section = document.querySelector("#skills-section");
    
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              section.classList.add("show");
            }
          },
          { threshold: 0.3 }
        );
    
        if (section) {
          observer.observe(section);
        }
    
        return () => observer.disconnect();
      }, []);
    
  return (
    <div id="skills-section">
          <h3 className="skills-heading">Skills</h3>
          <div className="skills-container">
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skill-items">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>React Js</span>
                {/* <span>Next Js</span> */}
                <span>Tailwind CSS</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <div className="skill-items">
                <span>Node Js</span>
                <span>Express</span>
                {/* <span>Python</span> */}
                <span>MySQL</span>
                <span>MongoDB</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Others</h3>
              <div className="skill-items">
                <span>Git</span>
                <span>GitHub</span>
                <span>VS Code</span>
                <span>Vercel</span>
                <span>Postman</span>
                <span>C</span>
                <span>Java</span>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Skills