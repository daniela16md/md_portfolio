import React, { useState, useRef, useEffect } from 'react';
import './HeaderDM.css';
import { HashLink as Link } from 'react-router-hash-link';
import '../../pages/Home/Home.css'

function HeaderDM() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); 
  const hamburgerRef = useRef(null);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !hamburgerRef.current.contains(event.target)) {
        closeMenu(); 
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="headerDM">
      <div className="pheader-container">
        <h4 className="pheader">DM</h4>
      </div>
      <nav ref={menuRef} className={`divhomebuttons ${menuOpen ? 'open' : 'close'}`}>
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

      <div ref={hamburgerRef} className={`hamburger ${menuOpen ? 'open' : 'close'}`} onClick={toggleMenu}>
        <div className="hamburgerline"></div>
        <div className="hamburgerline"></div>
        <div className="hamburgerline"></div>
      </div>
    </header>
  );
}

export default HeaderDM;
