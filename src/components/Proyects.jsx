import React from 'react';
import {motion as m } from 'framer-motion'
const Proyects = () => {
    return (
        <m.main className='container-component' id="proyects"
        whileInView={{
            opacity:[0,1],
            transition:{
                duration:2
            }

        }}>
          <section className='container-component'>  
            <h2>Proyects</h2> 
            </section>   
        </m.main>
    );
}

export default Proyects;
