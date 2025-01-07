import React, { useState, useEffect } from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';
import ReactModal from 'react-modal'; 
import projects from '../../Data/projets.json'; 
import './Projects.css';

ReactModal.setAppElement('#root');

function Projects() {
  const [selectedTech, setSelectedTech] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [currentUrl, setCurrentUrl] = useState('');
  const [showProjects, setShowProjects] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowProjects(true); 
    }, 1000); 
    return () => clearTimeout(timer);
  }, []);

  const handleTechChange = (event) => {
    setSelectedTech(event.target.value);
  };

  const filteredProjects = selectedTech
    ? projects.projects.filter(project => project.technologies.includes(selectedTech))
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
  const handleProjectClick = (project) => {
    setActiveProject(project);
  };
  const closeProjectDetails = () => {
    setActiveProject(null);
  }

  return (
    <div className="projects-page">
      <h2 className='sectionh2'>Mes Projets</h2>
      <div className="filters">
        <label htmlFor="techFilter" className='labelfiltre'>Filtrer par technologie</label>
        <select id="techFilter" value={selectedTech} onChange={handleTechChange} aria-label="Filtrer par technologie" >
          <option value="">Tous les projets</option>
          {techOptions.map((tech, index) => (
            <option key={index} value={tech}>{tech}</option>
          ))}
        </select>
      </div>

      <div className={`projects-list ${showProjects ? 'drop-in' : ''}`}>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              style={{
                animationDelay: `${(index + 1) * 1}s`, 
              }}
            >
               {activeProject && activeProject.id === project.id ? ( 
                <div className="project-details" onClick={closeProjectDetails}>
                  <p><strong>Technologies:</strong> {project.technologies}</p>
                  <p>{project.text}</p>
                  <div className='lienssite'>
                    {project.github && (
                      <button className="button-project-link" onClick={() => window.open(project.github, '_blank')} aria-label={`Voir le projet sur GitHub: ${project.name}`}>
                        <FaGithub /><span className="button-text">Le chantier de mon projet</span>
                      </button>
                    )}
                    {project.lien && (
                      <button className="button-project-link" onClick={() => openModal(project.lien)} aria-label={`Voir le lien du projet: ${project.name}`}>
                        <FaLink /> <span className="button-text">Le show en direct</span>
                      </button>
                    )}
                  </div>
                </div>
              ) : (
               <div onClick={() => handleProjectClick(project)}>
                <img
                  src={project.image}
                  alt={`Image du projet ${project.name}`}
                  className="project-image"
                  loading="lazy"
                  width="300"
                  height="150"
                  onClick={() => handleProjectClick(project.id)} 
                />
                <h3>{project.name}</h3>
               </div>
              )}
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
        className="modal-content modal-content-projets"
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
