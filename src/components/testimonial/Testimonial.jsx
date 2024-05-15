import React from 'react';
import "./testimonial.css";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import avatarImg1 from '../../images/item-t1.jpg';
import avatarImg2 from '../../images/item-t2.jpg';
import avatarImg3 from '../../images/item-t3.jpg';
import avatarImg4 from '../../images/item-t4.jpg';

const data = [
    {
        avatar: avatarImg1,
        name: 'Revo Ti',
        review: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quos,
        repudiandae ratione dolor atque eum deserunt assumenda culpa pariatur,
        ad illum aspernatur impedit sunt quae similique libero necessitatibus
        eius ut.
        `
    },
    {
        avatar: avatarImg2,
        name: 'Revo Ti',
        review: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quos,
        repudiandae ratione dolor atque eum deserunt assumenda culpa pariatur,
        ad illum aspernatur impedit sunt quae similique libero necessitatibus
        eius ut.
        `
    },
    {
        avatar: avatarImg3,
        name: 'Revo Ti',
        review: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quos,
        repudiandae ratione dolor atque eum deserunt assumenda culpa pariatur,
        ad illum aspernatur impedit sunt quae similique libero necessitatibus
        eius ut.
        `
    },
    {
        avatar: avatarImg4,
        name: 'Revo Ti',
        review: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quos,
        repudiandae ratione dolor atque eum deserunt assumenda culpa pariatur,
        ad illum aspernatur impedit sunt quae similique libero necessitatibus
        eius ut.
        `
    },
];

const Testimonial = () => {
    return (
        <section id="testimonial">
            <div className="section__wrapper">
                <div className="section__header">
                    <h2 className="primary__title">Testimonial</h2>
                    <p className="text__muted description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quos,
                        repudiandae ratione dolor atque eum deserunt assumenda culpa pariatur,
                        ad illum aspernatur impedit sunt quae similique libero necessitatibus
                        eius ut.
                    </p>
                </div>

                <Swiper
                    className='testimonial__container'
                    modules={[Pagination]}
                    spaceBetween={40}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        700: {
                            slidesPerView: 2
                        }
                    }}
                >
                    {data.map(({ avatar, name, review }, index) => (
                        <SwiperSlide key={index} className='testimonial'>
                            <div className="client__avatar">
                                <img src={avatar} alt="avatar" />
                            </div>
                            <h3 className="client__name">{name}</h3>
                            <small className="client__review">{review}</small>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default Testimonial;
