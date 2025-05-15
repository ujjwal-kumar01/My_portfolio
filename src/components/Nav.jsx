import React, { useState } from 'react';
import './css_files/Navi.css';

function Navi() {
    const [activeItem, setActiveItem] = useState(null);

    const handleClick = (itemIndex) => {
        setActiveItem(itemIndex);
    };

    const handleResetClick = () => {
        setActiveItem(4);
    };

    return (
        <div className="app">
            {/* Outer Circle */}
            <div className="menu-circle">
                {/* Moveable Circle */}
                <div
                    className="toggle-circle"
                    style={{
                        transform: activeItem !== null && activeItem !== 4
                            ? `rotate(${activeItem * 90}deg) translate(60px) rotate(-${activeItem * 90}deg)`
                            : 'none',
                    }}
                ></div>

                {/* Home Button */}
                <a href="#home" className="medium-circle" onClick={handleResetClick}>
                    <div
                        style={{
                            zIndex: 10,
                            opacity: activeItem === null || activeItem === 4 ? 0 : 1,
                            color: '#fff',
                        }}
                        className='homii'
                    >
                        Home
                    </div>
                </a>

                {/* Menu Items */}
                <a href="#ContactUs" className="menu-item" style={{ '--angle': '0deg' }} onClick={() => handleClick(0)}>
                    Contact
                </a>
                <a href="#projects-section" className="menu-item" style={{ '--angle': '90deg' }} onClick={() => handleClick(1)}>
                    Projects
                </a>
                <a href="#skills-section" className="menu-item" style={{ '--angle': '180deg' }} onClick={() => handleClick(2)}>
                    Skills
                </a>
                <a href="#about" className="menu-item" style={{ '--angle': '270deg' }} onClick={() => handleClick(3)}>
                    About
                </a>
            </div>
        </div>
    );
}

export default Navi;
