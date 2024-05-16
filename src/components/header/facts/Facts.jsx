import React, { useEffect, useState, useRef } from 'react';
import './facts.css';

import Odometer from 'react-odometerjs';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Facts = () => {
    const [experience, setExperience] = useState(0);
    const [projects, setProjects] = useState(0);
    const [clients, setClients] = useState(0);

    const container = useRef(null);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setExperience(10);
            setProjects(87);
            setClients(52);
        }, 300);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    gsap.registerPlugin(useGSAP);
    useGSAP(() => {
        const timeline = gsap.timeline();
        timeline.from(".fact__item", {
            delay: 1.5,
            x: -100,
            stagger: .5,
            opacity: 0
        });
    }, { scope: container });

    return (
        <div className='fact__container' ref={container}>
            <div className="fact__item">
                <div className="count__container">
                    <Odometer value={experience} />
                    <span className='indicator'>+</span>
                </div>
                <p className="name">Years of Experience</p>
            </div>
            <div className="fact__item">
                <div className="count__container">
                    <Odometer value={projects} />
                    <span className='indicator'>+</span>
                </div>
                <p className="name">Completed Projects</p>
            </div>
            <div className="fact__item">
                <div className="count__container">
                    <Odometer value={clients} />
                    <span className='indicator'>+</span>
                </div>
                <p className="name">Happy Clients</p>
            </div>
        </div>
    );
}

export default Facts;
