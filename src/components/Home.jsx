
import {React, useRef} from 'react';
import {motion as m } from 'framer-motion'

const Home = () => {
   
    return (
        <m.main className='container' id="home" 
        whileInView={{
            opacity:[0,1],
            transition:{
                duration:2
            }
        }}>
            <section className='container-component'>  
            <h2>Home</h2>              
                <h1 className='title'>Daniel</h1>
                <h1 className='title'>Pérez</h1>
            </section>                  
        </m.main>
    );
}

export default Home;
