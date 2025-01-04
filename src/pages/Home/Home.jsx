import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import Parcours from '../../components/Parcours/Parcours';
import Skills from '../../components/Skills/Skllls';
import Certificates from '../../components/Certifcats/Certificats';
import Projects from '../../components/Projects/Projects';
import PhotoWeb from '../../images/PhotoWeb.webp';
import Loader from '../../components/Loader/Loader';
import ScrollToTop from '../../components/Top/ScrollToTop'
import './Home.css';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); 
  }, []); 

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);


  return (
    <div className="home pagecontent">
      {loading && <Loader />} 
     
      <div className='divhome'>
        
        <div className='divhomediv'>
          <h1 className='line'>Bonjour,</h1>
          <p className="line">Je m'appelle Daniela,</p>
          <p className="line">je suis développeuse web</p>
          <p className="line">passionnée par les technologies frontend.</p>
          <Link to="/apropos" className='line'>Apropos de moi </Link>
        </div>
        <img className="photoweb" src={PhotoWeb} alt="Daniela" loading="lazy" sizes='200' height='200' />
      </div>
      <div id="projets">
        <Projects />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <Parcours id="parcours" />
      <div id="certificats">
        <Certificates />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Home;
