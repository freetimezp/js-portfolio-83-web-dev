import React, { useState } from 'react';
import './card.css';
import { AiOutlineShareAlt } from 'react-icons/ai';

const Card = (props) => {
    const [openStack, setOpenStack] = useState(false);

    return (
        <div className='card'>
            <div className="picture">
                <img src={props.image} alt={props.title} />
            </div>

            <div className="card__details">
                <div className="card__details__top">
                    <h2 className="title">{props.title}</h2>
                </div>
                <div className="card__details__middle">
                    <p className="description">
                        {props.data?.description}
                    </p>
                </div>
                <div className="card__details__bottom">
                    <div className="stack__container">
                        <div className="stack__left">Stack</div>
                        <div className="stack__right">
                            <div className="stack__box__container">
                                {props.stack?.map((list, index) => {
                                    if (index < 4) {
                                        return (
                                            <div key={index} className='stack__box'>
                                                <div className="stack__icon__container">
                                                    <span className="stack__icon" style={{ color: list.iconColor }}>
                                                        {list.icon}
                                                    </span>
                                                    <span className='stack__name'>
                                                        {list.name}
                                                    </span>
                                                </div>
                                            </div>
                                        );
                                    }
                                })}
                            </div>

                            {props.stack?.length > 4 ? (
                                <div className='stack__view__more' onClick={() => { setOpenStack(!openStack) }}>
                                    <span>View all Stack</span>
                                    <div className="more__btn">
                                        <div className={`stack__expand__box ${openStack ? 'open__stack_active' : ''}`}>
                                            <h3 className="title">More stack used</h3>
                                            <div className="stack__box__container">
                                                {props.stack?.map((list, index) => {
                                                    if (index >= 4) {
                                                        return (
                                                            <div key={index} className='stack__box'>
                                                                <div className="stack__icon__container">
                                                                    <span className="stack__icon" style={{ color: list.iconColor }}>
                                                                        {list.icon}
                                                                    </span>
                                                                    <span className='stack__name'>
                                                                        {list.name}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        );
                                                    }
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : ""}
                        </div>
                    </div>

                    <div className="button__container">
                        <a href={props.data?.demoLink} rel="noreferrer"
                            target='_blank' className='btn btn__primary'>Demo</a>
                        <div className="btn__share">
                            <AiOutlineShareAlt />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
