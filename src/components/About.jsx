import React from 'react';
import {Link} from 'react-router-dom'
import { motion as m } from 'framer-motion'

const About = () => {
    return (
        <m.main className='main-page' id="about"
            whileInView={{
                opacity: [0, 1],
                transition: {
                    duration: 2
                }
            }}>
            <h2>About</h2>
            <section className='container-component'>
                <section className='card-about'>
                    <p>As a good full stack developer I can create a website from start to finish, although where I enjoy the most is the layout... the designs, the transitions, the pixel perfect, etc...</p>
                    <Link to='/about'><button>Info</button></Link>
                </section>
            </section>
           
        </m.main>
    );
}
export default About;
