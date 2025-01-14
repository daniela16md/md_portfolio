import React, { useState, useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaSass, FaJsSquare, FaReact, FaCodeBranch, FaBug, FaSearchengin, FaLanguage, FaGithub } from 'react-icons/fa';
import { SiSwagger } from "react-icons/si";
import { IoLogoNodejs } from 'react-icons/io';
import { FaCogs } from 'react-icons/fa';
import { FaRandom } from 'react-icons/fa';
import skillsData from '../../Data/softskills.json';
import './Skills.css';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(skillsData.skillsData);
  }, []);
  const shuffleSkills = () => {
    const shuffledSkills = [...skills];
    for (let i = shuffledSkills.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledSkills[i], shuffledSkills[j]] = [shuffledSkills[j], shuffledSkills[i]]; 
    }
    setSkills(shuffledSkills); 
  };

  return (
    <section className="softskills-container">
      <h2 className="sectionh2">Skills</h2>
      <button className="shuffle-button" onClick={shuffleSkills}>Réorganiser les compétences <FaRandom  /></button>
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
                        skill.icon === 'FaCogs' ? FaCogs :
                        null;

            return (
              <article key={skill.id} className="skill-card">
              {Icon ? (
                <Icon className="skill-icon" style={{ color: skill.color }} />
              ) : (
                <p>Icône introuvable</p>  
              )}
              <p className="skill-name">{skill.name}</p>
            </article>
            );
          })
        ) : (
          <p>Chargement...</p>
        )}
      </div>
    </section>
  );
};

export default Skills;
