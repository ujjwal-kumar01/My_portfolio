import React, { useEffect, useState } from "react";
import myPhoto from "./icons/myphoto1.jpg";
import githubIcon from "./icons/github-94.png";
import linkedinIcon from "./icons/linkedin.png";
import instagramIcon from "./icons/instagram.png";
import "./css_files/Top.css";
import Hamburger from "./Hamburger";

function Top() {
  const words = [
    "Software Developer",
    "Full-Stack Engineer",
    "Tech Enthusiast",
    "Problem Solver",
  ];

  const [currentWord, setCurrentWord] = useState(words[0]);

  /* ================= Typing Animation ================= */
  useEffect(() => {
    let timeout;

    const deleteAndType = () => {
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
          }, 100);
        }
      }, 60);
    };

    timeout = setTimeout(deleteAndType, 1200);

    return () => clearTimeout(timeout);
  }, [currentWord]);

  /* ================= Intersection Animation ================= */
  useEffect(() => {
    const elements = document.querySelectorAll(".webtext");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.isIntersecting
            ? entry.target.classList.add("show")
            : entry.target.classList.remove("show");
        });
      },
      { threshold: 0.5 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  /* ================= Split Word Logic ================= */

  const splitWords = currentWord.split(" ");
  const firstWord = splitWords[0];
  const remainingWords = splitWords.slice(1).join(" ");

  return (
    <div id="home">
      <div className="top">
        <div className="ribbon">OPEN TO WORK</div>
        <div className="marg">
          <div className="techi">Tech Enthusiast</div>
          <div id="hello">Hi, I'm Ujjwal 👋</div>
          <div className="stacki">Frontend → Backend</div>
        </div>
      </div>

      <div className="ribbonPosition">
        <div className="ribbon2">OPEN TO WORK</div>
        <div className="image">
          {/* Uncomment if using photo */}
          <img src={myPhoto} alt="profilePic" className="photo" />
        </div>
      </div>

      <Hamburger />

      <div className="top-container flex flex-col">
        <div className="webtext">{firstWord}</div>
        <div className="webtext text">
          {remainingWords || "\u00A0"}
        </div>

        {/* Social Links */}
        <div className="social-links">
          <a
            href="https://github.com/ujjwal-kumar01"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="GitHub" />
          </a>

          <a
            href="https://www.linkedin.com/in/ujjwal-dev-engineer/"
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