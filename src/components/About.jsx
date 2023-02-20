import React from 'react';
import { motion as m } from 'framer-motion'

const About = () => {
    return (
        <m.main className='container' id="about"
            whileInView={{
                opacity: [0, 1],
                transition: {
                    duration: 2
                }
            }}>
            <section className='container-component'>
                <h2>About</h2>
                <section className='card-about'>
                    <p>As a good full stack developer I can create a website from start to finish, although where I enjoy the most is the layout... the designs, the transitions, the pixel perfect, etc...</p>
                    {/* <img className='imgAbout'  alt="Default img" /> */}
                </section>
            </section>
        </m.main>
    );
}
export default About;
