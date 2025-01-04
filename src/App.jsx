import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from './pages/Home/Home';
import HeaderDM from './components/Header/HeaderDM';
import Footer from './components/Foooter/Footer';
import Apropos from './pages/Apropos/Apropos';
import './App.css'

function App() {
  return (
    <Router basename="/my_portfolio">
      <HeaderDM />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App