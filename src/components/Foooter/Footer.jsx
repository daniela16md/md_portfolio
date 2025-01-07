import React from 'react';
import { FaGithub, FaEnvelope } from 'react-icons/fa'; 
import './Footer.css';  

const Footer = () => {
  return (
    <footer className="footer fade-in delay-3s">
      <section className='footerrow'>
        <div className="footer-left">
          &copy; {new Date().getFullYear()} Daniela Mattl. All rights reserved.
        </div>
        <div className="social-links">
          <a href="https://github.com/daniela16md?tab=repositories" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={30} className="social-icon" />
          </a>
          
          <a href="mailto:danamattl@yahoo.com" aria-label="Email">
            <FaEnvelope size={30} className="social-icon" />
          </a>
        </div>
      </section>
      <div>
        <p className='footer-oups'>Oups, tout en bas, il n'y a rien, mais tu peux remonter facilement grâce à la flèche !</p>
      </div>
    </footer>
  );
};

export default Footer;