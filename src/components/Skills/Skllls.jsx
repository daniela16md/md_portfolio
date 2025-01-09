import React, { useState, useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaSass, FaJsSquare, FaReact, FaCodeBranch, FaBug, FaSearchengin, FaLanguage, FaGithub,} from 'react-icons/fa';
import { SiSwagger } from "react-icons/si";
import { IoLogoNodejs } from 'react-icons/io';
import { FaCogs } from 'react-icons/fa';
import skillsData from '../../Data/softskills.json';
import './Skills.css'
const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(skillsData.skillsData);
  }, []);

  const handleDragStart = (event, skillId) => {
    event.dataTransfer.setData('skillId', skillId);
  };

  const handleDrop = (event, targetSkillId) => {
    event.preventDefault();
    const draggedSkillId = event.dataTransfer.getData('skillId');   
    const draggedSkillIndex = skills.findIndex(skill => skill.id === parseInt(draggedSkillId));
    const targetSkillIndex = skills.findIndex(skill => skill.id === parseInt(targetSkillId));

    if (draggedSkillIndex !== -1 && targetSkillIndex !== -1) {
      const updatedSkills = [...skills];
      const temp = updatedSkills[draggedSkillIndex];
      updatedSkills[draggedSkillIndex] = updatedSkills[targetSkillIndex];
      updatedSkills[targetSkillIndex] = temp;
      setSkills(updatedSkills);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();  
  };

  return (
    <div className="softskills-container" onDrop={(event) => handleDrop(event, null)} onDragOver={handleDragOver}>
      <h2 className='sectionh2'> Skills</h2>
      <div className="skills-list">
        {skills.length > 0 ? (
          skills.map((skill) => {
            const Icon = skill.icon === 'FaHtml5' ? FaHtml5 :
                        skill.icon === 'FaCss3Alt' ? FaCss3Alt :
                        skill.icon === 'FaSass' ? FaSass :
                        skill.icon === 'FaJsSquare' ? FaJsSquare :
                        skill.icon === 'FaReact' ? FaReact :
                        skill.icon === 'FaCodeBranch' ? FaCodeBranch :
                        skill.icon === 'FaBug' ? FaBug :
                        skill.icon === 'FaSearchengin' ? FaSearchengin :
                        skill.icon === 'FaLanguage' ? FaLanguage :
                        skill.icon === 'FaGithub' ? FaGithub :
                        skill.icon === 'SiSwagger' ? SiSwagger :
                        skill.icon === 'IoLogoNodejs' ? IoLogoNodejs :
                        skill.icon === ' FaCogs' ?  FaCogs :
                        null;

            return (
              <div key={skill.id} className="skill-card" draggable="true" onDragStart={(event) => handleDragStart(event, skill.id)}
                onDrop={(event) => handleDrop(event, skill.id)}
                onDragOver={handleDragOver}
                >
                <Icon className="skill-icon" style={{ color: skill.color }} />
                <p className="skill-name" >{skill.name}</p>
              </div>
            );
          })
        ) : (
          <p>Chargement...</p>  
        )}
      </div>
    </div>
  );
};

export default Skills;