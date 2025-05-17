import React, { useEffect } from 'react';
import './css_files/Skills.css';
import Projects from './Projects';

const skillImages = {
  HTML: 'https://cdn.icon-icons.com/icons2/2107/PNG/96/file_type_html_icon_130541.png',
  CSS: 'https://static-00.iconduck.com/assets.00/file-type-css-icon-226x256-ytqdyr76.png',
  JavaScript: 'https://static-00.iconduck.com/assets.00/javascript-js-icon-512x512-q3igwln6.png',
  'React Js': 'https://static-00.iconduck.com/assets.00/react-icon-256x228-97ltgbl1.png',
  'Tailwind CSS': 'https://seekicon.com/free-icon-download/tailwindcss_1.svg',
  'Node Js': 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_node_icon_130301.png',
  Express: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png',
  MySQL: 'https://cdn-icons-png.flaticon.com/512/5968/5968313.png',
  MongoDB: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png',
  Git: 'https://cdn-icons-png.flaticon.com/512/2111/2111288.png',
  GitHub: 'https://cdn-icons-png.flaticon.com/512/733/733553.png',
  'VS Code': 'https://raw.githubusercontent.com/github/explore/main/topics/visual-studio-code/visual-studio-code.png',
  Vercel: 'https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png',
  Postman: 'https://cdn.worldvectorlogo.com/logos/postman.svg',
  C: 'https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png',
  'C++': 'https://cdn-icons-png.flaticon.com/512/226/226777.png',
  TypeScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  NextJS: 'https://cdn.worldvectorlogo.com/logos/nextjs-2.svg',
};

function Skills() {
  useEffect(() => {
  const handleScroll = () => {
    const section = document.getElementById('skills-section');
    if (section) {
      const rect = section.getBoundingClientRect();

      // Show when in view, hide when out of view
      if (rect.top < window.innerHeight * 0.5 && rect.bottom > 0) {
        section.classList.add('show');
      } else {
        section.classList.remove('show');
      }
    }
  };

  handleScroll(); // Check once on mount

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);


  const renderSkillItem = (skill) => (
    <span key={skill} className="skill-with-icon">
      {skillImages[skill] && (
        <img src={skillImages[skill]} alt={skill} className="skill-icon" />
      )}
      {skill}
    </span>
  );

  return (
    <>
      <div id="skills-section">
        <h3 className="skills-heading">Skills</h3>
        <p id='mydetails2'>I build full-stack web applications with a focus on clean UI and efficient backend logic. Skilled in React, Node.js, and MongoDB, I enjoy creating scalable, real-time features and intuitive user experiences.</p>
        <div className="skills-container">
          <div className="skill-category">
            <h3>Frontend</h3>
            <div className="skill-items">
              {['HTML', 'CSS', 'JavaScript', 'React Js', 'Tailwind CSS','TypeScript'].map(renderSkillItem)}
            </div>
          </div>
          <div className="skill-category">
            <h3>Backend</h3>
            <div className="skill-items">
              {['Node Js', 'Express', 'MySQL', 'MongoDB','NextJS'].map(renderSkillItem)}
            </div>
          </div>
          <div className="skill-category">
            <h3>Others</h3>
            <div className="skill-items">
              {['Git', 'GitHub', 'VS Code', 'Vercel', 'Postman', 'C', 'C++'].map(renderSkillItem)}
            </div>
          </div>
        </div>
      </div>
      <Projects />
    </>
  );
}

export default Skills;
