import React, { useEffect } from "react";
import html_css_collage_concept from "./html-css-collage-concept.jpg";
import "./AboutMe.css";

function About() {
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("aboutmemain");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        
        // Apply "show" class when the section is in view, remove it when scrolled out
        if (rect.top < window.innerHeight * 0.75 && rect.bottom > 0) {
          aboutSection.classList.add("show");
        } else {
          aboutSection.classList.remove("show");
        }
      }
    };

    // Run the function once to check initial visibility
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="about">
      <div id="backgroundtop2"></div>
      <div id="Aboutme">
        <div className="scrolling-text">
          <h2>About Me&nbsp;&nbsp; About Me &nbsp;&nbsp;About Me &nbsp;&nbsp;About Me &nbsp;&nbsp;About Me &nbsp;&nbsp;About Me&nbsp;&nbsp; About Me &nbsp;&nbsp;About Me &nbsp;&nbsp;</h2>
          <h2>About Me &nbsp;&nbsp;About Me &nbsp;&nbsp;About Me&nbsp;&nbsp; About Me&nbsp;&nbsp; About Me &nbsp;&nbsp;About Me &nbsp;&nbsp;About Me &nbsp;&nbsp;About Me &nbsp;&nbsp;</h2>
        </div>
        <div id="aboutmemain">
          <p id="mydetails">
            Hi, I'm <b>Ujjwal Kumar</b>,<br/> a software developer and B.Tech student at <b>IIIT Una, HP</b>,<br/> specializing in <b>web development</b> and <b>DSA</b>.<br/>
            I have hands-on experience in full-stack development,<br/> focusing on scalable solutions and problem-solving.
          </p>
          <div id="htmlicons">
            <img src={html_css_collage_concept} alt="my photo" id="myphoto2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
