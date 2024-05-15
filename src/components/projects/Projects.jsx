import React, { useEffect, useRef, useState } from 'react';
import './projects.css';

import { sumArray } from '../../helper';
import { projects } from '../../data/data';
import Card from './card/Card';

const tabs = [
    { name: 'All' },
    { name: 'Web' },
    { name: 'UI/UX' },
    { name: 'Apps' }
];


const Projects = () => {
    const [displayProjects, setDisplayProjects] = useState(projects);

    const [activeIndex, setActiveIndex] = useState(0);
    const [offset, setOffset] = useState(0);
    const [indicatorWidth, setIndicatorWidth] = useState(0);

    const itemsEls = useRef([]);

    useEffect(() => {
        const prevEl = itemsEls.current.filter((_, index) => index < activeIndex);
        setOffset(
            sumArray(
                prevEl.map(item => item.offsetWidth)
            )
        );

        setIndicatorWidth(itemsEls.current[activeIndex].offsetWidth);
    }, [activeIndex]);

    const setProjects = (category) => {
        if (category === "All") {
            return setDisplayProjects(projects);
        }

        const pro = projects.filter((item) => item.category.toLowerCase() === category.toLowerCase());
        setDisplayProjects(pro);
    };

    return (
        <section id='projects'>
            <div className="section__wrapper projects__container">
                <div className="section__header center">
                    <h2 className="primary__title">Projects</h2>
                </div>
                <nav>
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            ref={el => itemsEls.current[index] = el}
                            onClick={() => {
                                setActiveIndex(index);
                                setProjects(tab.name);
                                //console.log(tab.name)
                            }}
                        >
                            {tab.name}
                        </button>
                    ))}

                    <span
                        className='active__indicator'
                        style={{
                            left: `${offset}px`,
                            width: `${indicatorWidth}px`
                        }}
                    ></span>
                </nav>

                <div className="card__container">
                    {displayProjects.map((project, index) => (
                        <Card
                            key={index}
                            title={project.title}
                            image={project.image}
                            stack={project.stack}
                            data={project.data}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
