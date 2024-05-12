import React from 'react';
import './header.css';

import Facts from './facts/Facts';

import profileImg from '../../images/profile.png';

const Header = () => {
    return (
        <header id="header" className='blur-effect'>
            <div className="stroke__text intro__text">design</div>
            <div className="section__wrapper header__container">
                <div className="column intro__container blur-effect">
                    <div className="header__info">
                        <div className="header__info__top">
                            Hello There! I'm <span className='color__primary'>Alexa Brauny</span>
                        </div>
                        <div className="header__info__middle">
                            <h1 className="primary__title header__title">I'm Web Developer</h1>
                            <p className="text__muted header__description">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
                                perferendis voluptatum perspiciatis totam accusantium. Atque at
                                omnis fuga nisi impedit!
                            </p>
                        </div>
                        <Facts />
                        <div className="header__info__bottom">
                            <button className="btn">Download CV</button>
                            <a href='/' className="btn">Send Email</a>
                        </div>
                    </div>
                </div>
                <div className="column profile__wrapper">
                    <div className="profile__photo__container">
                        <img src={profileImg} alt="profile" className='profile__photo' />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
