import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Navbar from './components/navbar/Navbar';
import Home from './pages/Home/Home';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
        <BrowserRouter >
            <Navbar />
            <div className="main">
                <Routes>
                {/* Rotas públicas */}
                    <Route path="/hfipe" element={<Home />} />
                    
                </Routes> 
            </div>
            <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
