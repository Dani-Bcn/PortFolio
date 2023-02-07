import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <main className='navbar'>
            <ul className='pages'>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#proyects">Proyects</a></li>
                <li><a href="#skills">Skills</a></li>
            </ul>
            <ul className='links'>
                <li><a href="linkedin">Linkedin</a></li>
                <li><a href="Github">Github</a></li>
                <li><a href="Domestika">Domestika</a></li>
                <li><a href="Contact">Contact</a></li>
            </ul>
            <div></div>
        </main>
    );
}

export default Navbar;
