import React, { useState, useEffect } from 'react'; 
import Parcours from '../../components/Parcours/Parcours';
import Skills from '../../components/Skills/Skllls';
import Certificates from '../../components/Certifcats/Certificats';
import Projects from '../../components/Projects/Projects';
import PhotoWeb from '../../images/Daniela.webp';
import Loader from '../../components/Loader/Loader';
import ScrollToTop from '../../components/Top/ScrollToTop';
import ReactModal from 'react-modal';
import './Home.css';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="home pagecontent" >
      {loading && <Loader />} 

     {!loading && <div>
      <div className='divhome'>
        <div className='divhomediv fade-in delay-0s'>
          <h1 className='line'>Bonjour,</h1>
          <p className="line">Je m'appelle Daniela,</p>
          <p className="line">je suis développeuse web</p>
          <p className="line">passionnée par les technologies frontend.</p>
          <p className='button-line line' onClick={openModal}>À propos de moi </p>
        </div>
        <img className="photoweb" src={PhotoWeb} alt="Daniela" loading="lazy" sizes='200' height='200' />
      </div>
      <div id="projets" className="fade-in delay-1s">
        {!loading && <Projects />}
      </div>
      <div id="skills" className="fade-in delay-2s">
        <Skills />
      </div >
      <div id="parcours" className="fade-in delay-3s">
        <Parcours />
        </div>
      <div id="certificats" className="fade-in delay-4s">
        <Certificates />
      </div>
      <ScrollToTop />
      </div>}

      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="À propos de moi"
        className="modal-content-home modal-content"
        overlayClassName="modal-overlay"
      >
        <div className="modal-header">
          <button className="modal-close" onClick={closeModal}>X</button>
        </div>
        <div className="modal-body">
          <p>
            <strong>Moi en une page :</strong> Une fusion entre une passionnée de code et un amateur de cappuccino. Optimisé pour mes longues sessions de travail et les brainstormings nocturnes. 
            <br />
            <strong>PS :</strong> Mes bugs sont limités à 0.01% (environ). ☕💻🚀
          </p>
          <p className='textsectionh2'><strong>Mes Projets</strong><br /> " Une sélection de mes ouvres numériques. Garanti sans lignes de code inutiles(ou presque). si ca plante, c'est une fonctionnalité, pas un bug"</p>
          <p className='textsectionh2'><strong>Mes Skills</strong><br /> " Mes super-pouvoir de développeur : parler couramment HTML, CSS et JS (avec un légèr accent React). Je maitrise également le Redux-tout (sauvetage de state inclus) "</p>
        </div>
      </ReactModal>
    </div>
  );
};

export default Home;
