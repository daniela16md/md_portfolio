import React, { useState } from 'react';
import './HeaderDM.css';
import { HashLink as Link } from 'react-router-hash-link';
import '../../pages/Home/Home.css'

function HeaderDM() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  

  return (
    <header className="headerDM">
      <div className="headerDMleft">
        <div className="pheader-container">
          <p className="pheader">DM</p>
        </div>
      </div>
      
      <nav className={`divhomebuttons ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link smooth to="/#projets" onClick={closeMenu} className="nav-link" >Projets</Link>
          </li>
          <li>
            <Link smooth to="/#skills" onClick={closeMenu} className="nav-link" >Skills</Link>
          </li>
          <li>
            <Link smooth to="/#parcours" onClick={closeMenu} className="nav-link" >Parcours</Link>
          </li>
          <li>
            <Link smooth to="/#certificats" onClick={closeMenu} className="nav-link" >Certificats</Link>
          </li>
        </ul>
      </nav>

      <div className="hamburger" onClick={toggleMenu}>
        <div className="hamburgerline"></div>
        <div className="hamburgerline"></div>
        <div className="hamburgerline"></div>
      </div>
    </header>
  );
}

export default HeaderDM;
