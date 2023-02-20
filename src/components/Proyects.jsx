import React from 'react';
import { motion as m, AnimatePresence } from 'framer-motion'
import CardProyectsMovieApi from './CardProyectsMovieApi';
import CardProyectsPokeApi from './CardProyectsPokeApi';
const Proyects = () => {
    return (
        <AnimatePresence>
            <m.main className='container-proyects' id="proyects"
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
               
                   <CardProyectsPokeApi/>
                   <CardProyectsMovieApi/>

                </section>
            </m.main>
        </AnimatePresence>

    );
}

export default Proyects;
