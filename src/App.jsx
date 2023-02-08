import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css'
import PageAhorcado from './pages/PageAhorcado';
import Components from './Components';
import PageContact from './pages/PageContact'

export function App() {
    return (
        <>
            <main>
                <Routes>
                    <Route path='/' element={<Components />} />
                    <Route path='/ahorcado' element={<PageAhorcado />} />
                    <Route path='/contact' element={<PageContact/>} />
                </Routes>
            </main>
        </>

    )
}


