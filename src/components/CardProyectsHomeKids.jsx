import React, { useState } from 'react';
import { motion as m } from 'framer-motion'
import { Link } from 'react-router-dom';


const CardProyectsPokeApi = () => {
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
        <m.section className='container-images-home' onHoverStart={() => handleHoverStart()} onHoverEnd={() => handleHoverEnd()}>
            <m.div >
                <m.span className='span-proyects'
                    variants={variantImg}
                    animate={isOpen ? "open" : "close"}
                ><Link to="homeKids"><p>More information</p></Link>
                </m.span>
            </m.div>
        </m.section>
        <article className='card-article'>
            <h3>Homeworks For kids</h3>
            <p>App to organize children's household chores.</p>
        </article>
        <article>
            <a href="https://github.com/Dani-Bcn/Home-works-frontEnd" target="_blank"><button>Github front_end</button></a>
            <a href="https://github.com/Dani-Bcn/Home-works-backEnd" target="_blank"><button>Github back_end</button></a>
        </article>
    </section>
    );
}

export default CardProyectsPokeApi;
