import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation  } from 'react-router-dom';
import Home from './pages/Home/Home';
import HeaderDM from './components/Header/HeaderDM';
import Footer from './components/Foooter/Footer';
import Apropos from './pages/Apropos/Apropos';
import './App.css'

function FindHash() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
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