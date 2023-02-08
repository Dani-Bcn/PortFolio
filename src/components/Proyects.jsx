import React from 'react';
import { motion as m, AnimatePresence } from 'framer-motion'
import CardProyects from './CardProyects';

const Proyects = () => {
    return (
        <AnimatePresence>
            <m.main className='container' id="proyects"
                whileInView={{
                    opacity: [0, 1],
                    transition: {
                        duration: 2
                    }
                }}
                    exit={{
                        opacity:[1,0],
                        transition:{
                            duration:10
                        }
                    }}
                >
                <section className='container-component'>
                <h2>Proyects</h2>
                   <CardProyects></CardProyects>

                </section>
            </m.main>
        </AnimatePresence>

    );
}

export default Proyects;
