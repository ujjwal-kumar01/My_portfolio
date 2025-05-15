import React, { useEffect, useState } from "react";
import myPhoto from "./icons/myphoto2.jpg";
import githubIcon from "./icons/github-94.png"; // replace with your icons
import linkedinIcon from "./icons/linkedin.png";
import instagramIcon from "./icons/instagram.png";
import "./css_files/Top.css";
import Hamburger from "./Hamburger";

function Top() {
  const words = ["Developer", "Designer"];
  const [currentWord, setCurrentWord] = useState(words[0]);

  useEffect(() => {
    function deleteAndType() {
      let currentWordIndex = words.indexOf(currentWord);
      let i = currentWord.length;
      let j = 0;

      const deleteInterval = setInterval(() => {
        if (i > 0) {
          setCurrentWord((prev) => prev.slice(0, -1));
          i--;
        } else {
          clearInterval(deleteInterval);

          currentWordIndex = (currentWordIndex + 1) % words.length;
          const nextWord = words[currentWordIndex];

          const typeInterval = setInterval(() => {
            if (j < nextWord.length) {
              setCurrentWord(nextWord.slice(0, j + 1));
              j++;
            } else {
              clearInterval(typeInterval);
            }
          }, 150);
        }
      }, 100);
    }

    const interval = setTimeout(deleteAndType, 1000);
    return () => clearTimeout(interval);
  }, [currentWord]);

  useEffect(() => {
    const elements = document.querySelectorAll(".webtext");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.5 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div id="home">
      <div className="top">
        <div className="ribbon">OPEN TO WORK</div>
        <div className="marg">
          <div className="techi"> Tech Enthusiast</div>
          <div id="hello">Hii, I'm Ujjwal 👋</div>
          <div className="stacki">Frontend → Backend</div>
        </div>
      </div>
      <div className="ribbonPosition">
        <div className="ribbon2">OPEN TO WORK</div>
        <div className="image">
          <img src={myPhoto} alt="profilePic" className="photo" />
        </div>
      </div>
      <Hamburger />
      <div className="top-container flex flex-col">
        <div className="webtext">Web</div>
        <div className="webtext text">{currentWord}</div>
        {/* 🔗 Social Links + Resume */}
        <div className="social-links">
          <a
            href="https://github.com/ujjwal-kumar01"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/ujjwal-kumar-692501296/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a
            href="https://www.instagram.com/ujjwal_srivastava01/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Top;
