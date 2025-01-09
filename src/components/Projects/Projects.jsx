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
  const [projectList, setProjectList] = useState(projects.projects); 

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
    ? projectList.filter(project => project.technologies.includes(selectedTech))
    : projectList;

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
  };

  const handleDragStart = (event, projectId) => {
    event.dataTransfer.setData('projectId', projectId);
  };

  const handleDrop = (event, targetProjectId) => {
    event.preventDefault();
    const draggedProjectId = event.dataTransfer.getData('projectId');
    const draggedProjectIndex = projectList.findIndex(project => project.id === parseInt(draggedProjectId));
    const targetProjectIndex = projectList.findIndex(project => project.id === parseInt(targetProjectId));

    if (draggedProjectIndex !== -1 && targetProjectIndex !== -1) {
      const updatedProjects = [...projectList];
      const temp = updatedProjects[draggedProjectIndex];
      updatedProjects[draggedProjectIndex] = updatedProjects[targetProjectIndex];
      updatedProjects[targetProjectIndex] = temp;
      setProjectList(updatedProjects);
      
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault(); 
  };

  return (
    <div className="projects-page" onDrop={(event) => handleDrop(event, null)} onDragOver={handleDragOver}>
      <h2 className="sectionh2">Mes Projets</h2>

      <div className="filters">
        <label htmlFor="techFilter" className="labelfiltre">Filtrer par technologie</label>
        <select id="techFilter" value={selectedTech} onChange={handleTechChange} aria-label="Filtrer par technologie">
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
              draggable="true"
              onDragStart={(event) => handleDragStart(event, project.id)}
              onDrop={(event) => handleDrop(event, project.id)}
              onDragOver={handleDragOver}
            >
              {activeProject && activeProject.id === project.id ? (
                <div className="project-details" onClick={closeProjectDetails}>
                  <p><strong>Technologies:</strong> {project.technologies}</p>
                  <p>{project.text}</p>
                  <div className="lienssite">
                    {project.github && (
                      <button
                        className="button-project-link"
                        onClick={() => window.open(project.github, '_blank')}
                        aria-label={`Voir le projet sur GitHub: ${project.name}`}
                      >
                        <FaGithub />
                        <span className="button-text">Le repository Github</span>
                      </button>
                    )}
                    {project.lien && (
                      <button
                        className="button-project-link"
                        onClick={() => openModal(project.lien)}
                        aria-label={`Voir le lien du projet: ${project.name}`}
                      >
                        <FaLink />
                        <span className="button-text">Le lien vers le site</span>
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
