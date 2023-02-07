import React from 'react';
import {motion as m } from 'framer-motion'
const Skills = () => {
    return (
        <m.main className='container-component' id="skills"
        whileInView={{
            opacity:[0,1],
            transition:{
                duration:2
            }

        }}>
            <section className='container-component'>  
            <h2>Skills</h2>              
               
            </section>   
        </m.main>
    );
}

export default Skills;
