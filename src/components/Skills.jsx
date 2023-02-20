import React from 'react';
import images from './Images';
import { motion as m } from 'framer-motion'
const Skills = () => {
    console.log(images)
    return (
        <m.main className='container' id="skills"
            whileInView={{
                opacity: [0, 1],
                transition: {
                    duration: 2
                }
            }}>
            <section className='skills'>
              
                {
                    images.map((e,i)=>(                     
                        <img  className='img-skills' key={i} src={e} alt="" /> 
                    ))
                }               
            </section>
        </m.main>
    );
}

export default Skills;
