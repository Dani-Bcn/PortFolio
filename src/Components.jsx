import React from 'react';
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Proyects from './components/Proyects';
import Skills from './components/Skills';

const Components = () => {
    return (
        <div>
          <Navbar></Navbar>
          <Home></Home>
          <About></About>
          <Proyects></Proyects>
          <Skills></Skills>
          <Footer></Footer>          
        </div>
    );
}

export default Components;
