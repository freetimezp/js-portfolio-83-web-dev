import React from 'react';
import './footer.css';

import { Link } from 'react-scroll';
import { menu, socialHandles } from '../../data/data';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="section__wrapper">
                <ul className="nav__link__container">
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
                </ul>

                <div className="social__handles__container">
                    {socialHandles.map((list, index) => (
                        <a key={index} href={list.link} className='icon__container social__handles'>
                            {list.icon}
                        </a>
                    ))}
                </div>

                <div className="copyright__container">
                    <h3>&copy; 2024. All Rights Reserved.</h3>
                    <p className="text__muted">Build with love by Freetime.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
