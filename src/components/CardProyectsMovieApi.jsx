import React, { useState } from 'react';
import { motion as m } from 'framer-motion'
import { Link } from 'react-router-dom';


const CardProyectsMovieApi = () => {
    const [isOpen, setIsOpen] = useState(false)
    const variantImg = {
        open: {
            opacity: 1,
            y: [300, 0],
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        close: {
            opacity: 0.5,
            y: [0, 300],
            transition: {
                duration: 0.5,
                ease: "easeIn"
            }
        }
    }
    const handleHoverStart = (() => {
        setIsOpen(!isOpen)
    })
    const handleHoverEnd = (() => {
        setIsOpen(!isOpen)

    })

    return (
        <section className='card-proyects'>
            <m.section className='container-images-movie' onHoverStart={() => handleHoverStart()} onHoverEnd={() => handleHoverEnd()}>
                <m.div >
                    <m.span className='span-proyects'
                        variants={variantImg}
                        animate={isOpen ? "open" : "close"}
                    ><Link to="movies"><p>More information</p></Link>
                    </m.span>
                </m.div>
            </m.section>
            <article className='card-article'>
                <h3>MoviesApp</h3>
                <p>App / Web to view movies and series information.</p>
            </article>
            <article>
                <a href="https://github.com/Dani-Bcn/MoviesApp" target="_blank"><button>Github</button></a>
                <a href="https://apiappmovies.netlify.app/" target="_blank"><button>Proyect</button></a>
            </article>
        </section>
    );

}

export default CardProyectsMovieApi;
