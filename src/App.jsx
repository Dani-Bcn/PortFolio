import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css'
import Home from './components/Home'
import About from './components/About';
import Proyects from './components/Proyects';
import Skills from './components/Skills';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export function App() {
    return (
        <main>
            <Navbar />
            <Home />
            <About />
            <Proyects />
            <Skills />
            <Footer />
        </main>
    );
}


