import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from './pages/Home/Home';
import HeaderDM from './components/Header/HeaderDM';
import Footer from './components/Foooter/Footer';
import './App.css'

function App() {
  return (
    <Router basename="/my_portfolio">
      <HeaderDM />
      <Routes> 
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App