import React, { useState } from 'react';
import './Navi.css';

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
                <div className="medium-circle menu-item" onClick={handleResetClick} 
                ><div
                style={{
                    opacity: activeItem === null || activeItem === 4 ? 0 : 1,
                    color: activeItem === null || activeItem === 4 ? '#fff' : '#00bcd4'
                }}
            >
                Home
            </div>
            </div>

                {/* Menu Items */}
                <a href="#home" className="menu-item" style={{ '--angle': '0deg' }} onClick={() => handleClick(0)}>
                    Index
                </a>
                <a href="#" className="menu-item" style={{ '--angle': '90deg' }} onClick={() => handleClick(1)}>
                    About
                </a>
                <a href="#" className="menu-item" style={{ '--angle': '180deg' }} onClick={() => handleClick(2)}>
                    Work
                </a>
                <a href="#" className="menu-item" style={{ '--angle': '270deg' }} onClick={() => handleClick(3)}>
                    Contact
                </a>
            </div>
        </div>
    );
}

export default Navi;
