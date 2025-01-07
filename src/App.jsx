import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
const Home = React.lazy(() => import('./pages/Home/Home'));
const HeaderDM = React.lazy(() => import('./components/Header/HeaderDM'));
const Footer = React.lazy(() => import('./components/Foooter/Footer'));
import Loader from './components/Loader/Loader';
import './App.css'

function App() {
  return (
    <Router basename="/my_portfolio">
       <Suspense fallback={<div>Chargement des pages...</div>}>
        <HeaderDM />
        <Routes> 
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App