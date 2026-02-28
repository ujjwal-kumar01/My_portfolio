import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Top from './components/Top'
import About from './components/About'
import Contactus from './components/Contactus'
import Skills from './components/Skills'
import Education from './components/Education'
import Footer from './components/Footer'
import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
  const cursor = document.querySelector(".custom-cursor");

  const moveCursor = (e) => {
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
  };

  const addHover = () => cursor.classList.add("cursor-hover");
  const removeHover = () => cursor.classList.remove("cursor-hover");

  document.addEventListener("mousemove", moveCursor);

  const hoverElements = document.querySelectorAll("a, button");
  hoverElements.forEach((el) => {
    el.addEventListener("mouseenter", addHover);
    el.addEventListener("mouseleave", removeHover);
  });

  return () => {
    document.removeEventListener("mousemove", moveCursor);
    hoverElements.forEach((el) => {
      el.removeEventListener("mouseenter", addHover);
      el.removeEventListener("mouseleave", removeHover);
    });
  };
}, []);

  return (
    <>
      <div className="custom-cursor"></div>
      <div className="stars-layer-3"></div>
      <div className="planet big"></div>
      <div className="planet small"></div>
      <div className="asteroid one"></div>
      <div className="asteroid two"></div>
      <div className="solar-system">
        <div className="sun"></div>
        <div className="orbit"></div>
        <div className="orbit-rotate">
          <div className="orbiting-planet"></div>
        </div>
      </div>
      <Top />
      <About />
      <Education />
      <Skills />
      <Contactus />
      <Footer/>

    </>
  )
}

export default App
