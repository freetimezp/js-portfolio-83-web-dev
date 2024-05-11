import React, { useState } from 'react';
import './navbar.css';

import { Link, animateScroll as scroll } from 'react-scroll';

import { SiWebmoney } from 'react-icons/si';
import { FaArrowUpRightFromSquare, FaBarsStaggered } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';

import { menu } from "../../data/data";

const Navbar = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <nav className='navbar__container'>
            {showSidebar ? (
                <div className='overlay' onClick={() => setShowSidebar(!showSidebar)}></div>
            ) : null}

            <div className="logo__container">
                <SiWebmoney />
            </div>
            <div className={`tab__group ${showSidebar ? "show" : ""}`}>
                <span className="icon__container close__btn" onClick={() => setShowSidebar(!showSidebar)}>
                    <FaTimes />
                </span>

                {menu.map((list, index) => (
                    <Link
                        key={index}
                        activeClass='active'
                        className='tab__item name'
                        to={list.name.toLowerCase()}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        {list.name}
                    </Link>
                ))}
            </div>
            <div className="nav__buttons__group">
                <button className='btn btn__primary'>
                    Hire Me <FaArrowUpRightFromSquare />
                </button>
                <FaBarsStaggered className='menu' onClick={() => setShowSidebar(!showSidebar)} />
            </div>
        </nav>
    )
}

export default Navbar;
