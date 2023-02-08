import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <main className='navbar'>
            <ul className='pages_nav'>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#proyects">Proyects</a></li>
                <li><a href="#skills">Skills</a></li>
            </ul>
            <ul className='links_nav'>
                <li><a href="https://www.linkedin.com/in/daniperezbnc/" target="_blank">Linkedin</a></li>
                <li><a href="https://github.com/Dani-Bcn" target="_blank">Github</a></li>
                <li><a href="https://www.domestika.org/es/nneodani" target="_blank">Domestika</a></li>
                <li><Link to="contact">Contact</Link></li>
            </ul>
            <div></div>
        </main>
    );}

export default Navbar;
