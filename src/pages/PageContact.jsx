import React from 'react';
import phone from '/img/phone.png'
import mail from '/img/mail.png'
import ubi from '/img/ubi.png'
import '../App.css'
import { Link } from 'react-router-dom';

const PageContact = () => {
    return (
        <main className='contact'>
               
            <section className='container-contact'>
            <h3>Contact me</h3>
                <span>
                    <img src={mail} alt="" />
                    <a href="mailto:nneodani@gmail.com">Send message</a>
                </span>
                <span>
                    <img src={phone} alt="" />
                    <p>651110553</p>
                </span>
                <span>
                    <img src={ubi} alt="" />
                    <p>Barcelona</p>
                </span>
                <Link to={"/"}><button href="/">Back</button></Link>
            </section>
        </main>
    );
}

export default PageContact;
