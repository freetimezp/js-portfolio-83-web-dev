import React from 'react';
import './contact.css';

import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';

const Contact = () => {
    return (
        <section id="contact">
            <div className="section__wrapper contact__container">
                <div className="section__header">
                    <h2 className="primary__title">Contact Me</h2>
                    <p className="text__muted description">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
                        inventore esse expedita labore facilis recusandae, nostrum incidunt,
                        aliquid repudiandae quasi natus debitis aliquam totam cumque quisquam
                        quae quod eum sequi. Dolore laudantium ex corporis perspiciatis ullam
                        cumque eligendi omnis error mollitia esse.
                    </p>
                </div>
                <div className="contact__group">
                    <div className="contact__options">
                        <article className="contact__option">
                            <MdOutlineEmail className='contact__icon' />
                            <h3>Email</h3>
                            <h5>email@email.com</h5>
                            <a href="/" className='btn'>Send Email</a>
                        </article>
                        <article className="contact__option">
                            <RiMessengerLine className='contact__icon' />
                            <h3>Messager</h3>
                            <h5>Alexa Brauny</h5>
                            <a href="/" className='btn'>Contact Me</a>
                        </article>
                        <article className="contact__option">
                            <BsWhatsapp className='contact__icon' />
                            <h3>WhatsApp</h3>
                            <h5>+12 345 67890</h5>
                            <a href="/" className='btn'>Contact Me</a>
                        </article>
                    </div>

                    <form>
                        <input type="text" name='name' placeholder='Your name' required />
                        <input type="email" name='email' placeholder='Your email' required />
                        <textarea name="message" rows={7} placeholder="Your message"></textarea>
                        <button type="submit" className="btn btn__primary">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
