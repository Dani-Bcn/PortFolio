import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css'
import PageAhorcado from './pages/PageAhorcado';
import PageMovies from './pages/PageMovies';
import PageHomeKids from './pages/PageHomeKids';
import Components from './Components';
import PageContact from './pages/PageContact'
export function App() {
    return (
        <>
            <main>
                <Routes>
                    <Route path='/' element={<Components />} />
                    <Route path='/ahorcado' element={<PageAhorcado />} />
                    <Route path='/movies' element={<PageMovies />} />
                    <Route path='/contact' element={<PageContact/>} />
                    <Route path='/homeKids' element={<PageHomeKids/>}/>
                </Routes>
            </main>
        </>

    )
}


