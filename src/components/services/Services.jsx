import React from 'react';
import './services.css';

import { FaPaintBrush } from 'react-icons/fa';
import { BsCodeSquare } from 'react-icons/bs';
import { TfiWrite } from 'react-icons/tfi';

const Services = () => {
    return (
        <section id="services">
            <div className="section__wrapper services__wrapper">
                <div className="section__header center">
                    <h2 className="primary__title">Services</h2>
                    <p className="text__muted description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quas
                        dolor perferendis, delectus at cupiditate fugit commodi molestiae
                        maiores libero expedita magnam.
                    </p>
                </div>
                <div className="services__group">
                    <article className="service">
                        <div className="service__top">
                            <div className="icon__container">
                                <FaPaintBrush className='icon' />
                            </div>
                            <h3 className="title">UI/UX Design</h3>
                        </div>
                        <div className="service__middle">
                            <p className="text__muted description">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Sapiente asperiores officiis sint commodi dolore, modi magnam!
                                Minus optio repudiandae deserunt aperiam necessitatibus aliquid
                                quis beatae, maxime ut esse voluptas quasi ea velit voluptatum
                                dolore nam.
                            </p>
                        </div>
                        <div className="service__bottom">
                            <button className="btn btn__primary">Read More</button>
                        </div>
                    </article>

                    <article className="service" style={{ "--color-primary": "var(--color-success)" }}>
                        <div className="service__top">
                            <div className="icon__container">
                                <BsCodeSquare className='icon' />
                            </div>
                            <h3 className="title">Web Development</h3>
                        </div>
                        <div className="service__middle">
                            <p className="text__muted description">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Sapiente asperiores officiis sint commodi dolore, modi magnam!
                                Minus optio repudiandae deserunt aperiam necessitatibus aliquid
                                quis beatae, maxime ut esse voluptas quasi ea velit voluptatum
                                dolore nam.
                            </p>
                        </div>
                        <div className="service__bottom">
                            <button className="btn btn__primary">Read More</button>
                        </div>
                    </article>

                    <article className="service" style={{ "--color-primary": "orangered" }}>
                        <div className="service__top">
                            <div className="icon__container">
                                <TfiWrite className='icon' />
                            </div>
                            <h3 className="title">Content Creation</h3>
                        </div>
                        <div className="service__middle">
                            <p className="text__muted description">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Sapiente asperiores officiis sint commodi dolore, modi magnam!
                                Minus optio repudiandae deserunt aperiam necessitatibus aliquid
                                quis beatae, maxime ut esse voluptas quasi ea velit voluptatum
                                dolore nam.
                            </p>
                        </div>
                        <div className="service__bottom">
                            <button className="btn btn__primary">Read More</button>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default Services;
