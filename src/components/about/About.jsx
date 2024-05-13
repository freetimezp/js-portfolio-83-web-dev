import React from 'react';
import './about.css';

import portfolioImg from '../../images/profile-2.png';

const About = () => {
    return (
        <section id='about'>
            <div className="section__wrapper about__container">
                <div className="me__container blur-effect">
                    <div className="photo__container">
                        <img src={portfolioImg} alt="portfolio" />
                    </div>
                </div>
                <div className="section__header">
                    <h2 className="primary__title">About Me</h2>
                    <h1 className="title">I m <span className="color__primary">Alexa Brauny</span></h1>
                    <p className="text__muted description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rerum
                        ex nobis ullam deserunt in nostrum provident, quis recusandae perspiciatis
                        ipsam sint sed, nisi blanditiis maiores at tenetur libero porro eligendi
                        modi repudiandae, atque itaque debitis. Repudiandae sint accusamus et
                        quaerat incidunt est laborum non, aliquid recusandae fuga nam.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
