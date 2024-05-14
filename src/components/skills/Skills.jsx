import React from 'react';
import './skills.css';

import { experience } from '../../data/data';

import SkillCard from './skillCard/SkillCard';

const Skills = () => {
    return (
        <section id="skills">
            <div className="section__wrapper">
                <div className="section__header center">
                    <h2 className="primary__title">My Skills</h2>
                </div>
                <div className="skills__container">
                    {experience.map((list, index) => (
                        <SkillCard key={index} {...list} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
