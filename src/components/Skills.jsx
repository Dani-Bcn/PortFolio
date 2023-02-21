import React from 'react';
import images from './Images';
import { motion as m } from 'framer-motion'
const Skills = () => {
    console.log(images)
    return (
        <m.main className='main-page-skills' id="skills"
            whileInView={{
                opacity: [0, 1],
                transition: {
                    duration: 2
                }
            }}>
            <h2>Skills</h2>
            <section className='container-skills-img'>
                {
                    images.map((e, i) => (
                        <div  key={i} className='skills-img' >
                            <span style={{ backgroundImage: `url(${e})` }}></span>
                        </div>
                    ))
                }
            </section>
        </m.main>
    );
}

export default Skills;
