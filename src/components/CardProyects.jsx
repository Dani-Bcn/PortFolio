import React,{useState} from 'react';
import {motion as m} from  'framer-motion'
import { Link } from 'react-router-dom';

 
const CardProyects = () => {
    const [isOpen, setIsOpen] = useState(false)
    const variantImg = {
        open:{
            opacity:1,
            y:[300,0],
            transition:{
                duration:0.5,
                ease:"easeOut"
            }
        },
        close:{
            opacity:0.5,
            y:[0,300],
            transition:{
                duration:0.5,
                ease:"easeIn"
            }        
        }
    }
    const handleHoverStart=(()=>{        
                setIsOpen(!isOpen)           
    })
    const handleHoverEnd=(()=>{        
        setIsOpen(!isOpen)
      
})

    return (
        <section className='card-proyects'>
          <m.section  onHoverStart={()=>handleHoverStart()}  onHoverEnd={()=>handleHoverEnd()}>
                <m.div className='img-proyects'>
                    <m.span
                           variants={variantImg}
                           animate ={isOpen ? "open" :"close"}
                    ><Link to="ahorcado"><p>More information</p></Link></m.span>
                </m.div>
                </m.section>
            <article>
                <h3>Poke_Ahorcado</h3>
                <p>The hangman game with names of Pokemons</p>
            </article>
            <article>
                <a href="https://github.com/Dani-Bcn/Poke_ahorcado" target="_blank"><button>Github</button></a>
                <a href="https://pokeahorcado.netlify.app/" target="_blank"><button>Proyect</button></a>
            </article>
        </section>
    );

}

export default CardProyects;
