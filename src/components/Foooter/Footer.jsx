import React, { useState, useEffect } from 'react'; 
import { FaGithub, FaEnvelope } from 'react-icons/fa'; 
import ReactModal from 'react-modal'; 
import ScrollToTop from '../../components/Top/ScrollToTop';
import './Footer.css';  

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <footer className="footer fade-in delay-3s">
      <ScrollToTop />
      <section className='footerrow'>
        <div className="footer-left">
          &copy; {new Date().getFullYear()} Daniela Mattl. All rights reserved.
        </div>
        <nav className="social-links">
          <a href="https://github.com/daniela16md?tab=repositories" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={30} className="social-icon" />
          </a>
          
          <a href="mailto:danamattl@yahoo.com" aria-label="Email">
            <FaEnvelope size={30} className="social-icon" />
          </a>
        </nav>
      </section>
      <section>
        <p className='footer-oups mentions' onClick={openModal}>Mentions légales</p>
        <p className='footer-oups'>Oups, tout en bas, il n'y a rien, mais tu peux remonter facilement grâce à la flèche !</p>
      </section>

            <ReactModal
              isOpen={isModalOpen}
              onRequestClose={closeModal}
              contentLabel="À propos de moi"
              className="modal-content-mentions modal-content"
              overlayClassName="modal-overlay"
            >
              <header className="modal-header">
                <button className="modal-close" onClick={closeModal}>X</button>
              </header>
              <main className="modal-body">
                <h3>Mentions Légales</h3>

                <section>
                  <h4>1. Propriétaire du site</h4>
                  <p>
                    Ce portfolio est la propriété de <strong>Daniela Mattl</strong>, développeuse web en formation,
                    passionnée de création numérique.  
                    Pour toute question ou collaboration: <br />
                    <a href="mailto:danamattl@yahoo.com">contactez-moi</a>.
                  </p>
                </section>

                <section>
                  <h4>2. Hébergement</h4>
                  <p>
                    Ce site est fièrement hébergé par <strong>GitHub Pages</strong>.<br />
                    Adresse : GitHub, Inc., 88 Colin P. Kelly Jr Street, San Francisco, CA 94107, USA.<br />
                    Un hébergeur fiable, parfait pour déployer des projets.
                  </p>
                </section>

                <section>
                  <h4>3. Responsabilité</h4>
                  <p>
                    Ce site a été conçu avec soin, créativité et dans le respect des bonnes pratiques de développement. Toutefois, je décline toute responsabilité en cas de :
                  </p>
                  <ul>
                    <li className='modal-content-mentionsul'>Mauvaise utilisation ou interprétation du contenu du site.</li>
                    <li className='modal-content-mentionsul'>Problèmes techniques indépendants de ma volonté, tels que des erreurs serveur ou des dysfonctionnements du réseau.</li>
                  </ul>
                </section>

                <section>
                  <h4>4. Données personnelles</h4>
                  <p>
                    Pas de collecte de données personnelles ici. Pas de cookies non plus.
                    Votre navigation reste anonyme et paisible.
                  </p>
                </section>

                <section>
                  <h4>5. Droits d’auteur</h4>
                  <p>
                    L’ensemble du contenu de ce site, y compris les textes, images, et projets, est ma propriété intellectuelle.<br />
                    Reproduction interdite sans autorisation préalable.
                  </p>
                </section>

                <section>
                  <h4>6. À propos des liens externes</h4>
                  <p>
                    Les liens externes présents sur ce site mènent à des ressources tierces. Bien qu’ils aient été choisis avec soin,
                    je ne suis pas responsable de leur contenu. Naviguez prudemment !
                  </p>
                </section>
              </main>
            </ReactModal>
    </footer>
  );
};

export default Footer;