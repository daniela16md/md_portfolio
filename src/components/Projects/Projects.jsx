import { useState } from 'react';
import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';
import ReactModal from 'react-modal'; 
import projects from '../../Data/projets.json'; 
import './Projects.css';

ReactModal.setAppElement('#root');

function Projects() {
  const [selectedTech, setSelectedTech] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [currentUrl, setCurrentUrl] = useState('');
  const handleTechChange = (event) => {
    setSelectedTech(event.target.value);
  };

  const filteredProjects = selectedTech
    ? projects.projects.filter(project => 
      project.technologies.includes(selectedTech)
      )
    : projects.projects;

  const techOptions = ['HTML', 'CSS', 'JS', 'React', 'NodeJS', 'Redux', 'SEO', 'Lighthouse', 'SCSS'];

  const openModal = (url) => {
    setCurrentUrl(url); 
    setIsModalOpen(true); 
  };

  const closeModal = () => {
    setIsModalOpen(false); 
    setCurrentUrl(''); 
  };

  return (
    <div className="projects-page">
      <h2>Mes Projets</h2>

      <div className="filters">
        <label htmlFor="techFilter">Filtrer par technologie</label>
        <select id="techFilter" value={selectedTech} onChange={handleTechChange}>
          <option value="">Tous les projets</option>
          {techOptions.map((tech, index) => (
            <option key={index} value={tech}>{tech}</option>
          ))}
        </select>
      </div>

      <div className="projects-list">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={`Image du projet ${project.name}`} 
              className="project-image" 
              loading="lazy"
              width="300"
              height="150"
              />
              <h3>{project.name}</h3>
              <p><strong>Technologies:</strong> {project.technologies}</p>
              <p>{project.text}</p>
              <div className='lienssite'>
                {project.github && (
                  <button className="project-link" onClick={() => window.open(project.github, '_blank')}
                    aria-label={`Voir le projet sur GitHub: ${project.name}`}
                  >
                    <FaGithub />
                  </button>
                )}
                {project.lien && (
                  <button className="project-link" onClick={() => openModal(project.lien)}
                  aria-label={`Voir le lien du projet: ${project.name}`}
                  >
                    <FaLink />
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>Aucun projet trouvé pour cette technologie.</p>
        )}
      </div>

      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal} 
        contentLabel="Project Link"
        className="modal-content"
        overlayClassName="modal-overlay"
        ariaHideApp={false} 
      >
        <button className="modal-close" onClick={closeModal}>X</button>
        <iframe src={currentUrl} width="100%" height="600px" title="Project Site" />
      </ReactModal>
    </div>
  );
}

export default Projects;
