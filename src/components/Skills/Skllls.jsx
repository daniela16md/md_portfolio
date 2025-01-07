import React, { useState, useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaSass, FaJsSquare, FaReact, FaCodeBranch, FaBug, FaSearchengin, FaLanguage, FaGithub,} from 'react-icons/fa';
import { SiSwagger } from "react-icons/si";
import { IoLogoNodejs } from 'react-icons/io';
import { FaCogs } from 'react-icons/fa';
import skillsData from '../../Data/softskills.json';
import './Skills.css'
const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [progress, setProgress] = useState([]);  
  const [isLoaded, setIsLoaded] = useState(false); 
  const [activeSkill, setActiveSkill] = useState(null);

  useEffect(() => {
    setSkills(skillsData.skillsData);
  }, []);

  useEffect(() => {
    if (skills.length > 0) {
      const progressArray = skills.map((skill) => ({
        id: skill.id,
        level: 0, 
        targetLevel: skill.level, 
      }));
      setProgress(progressArray);

      skills.forEach((skill, index) => {
        let currentProgress = 0;
        const interval = setInterval(() => {
          if (currentProgress < skill.level) {
            currentProgress += 1;
            setProgress(prevProgress => {
              const newProgress = [...prevProgress];
              newProgress[index].level = currentProgress;
              return newProgress;
            });
          } else {
            clearInterval(interval);
          }
        }, 20); 
      });

      setIsLoaded(true); 
    }
  }, [skills]);

  const handleSkillClick = (skillId) => {
    setActiveSkill(skillId); 
  };

  return (
    <div className="softskills-container">
      <h2 className='sectionh2'> Skills</h2>
      <div className="skills-list">
        {isLoaded ? (
          skills.map((skill, index) => {
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
              <div key={skill.id} className="skill-card">
                {skill.image ? (
                  <img className="skillimage" src={skill.image} alt={skill.alt} />
                ) : (
                  Icon && <Icon className="skill-icon" style={{ color: skill.color }} />
                )}

                <p className="skill-name" onClick={() => handleSkillClick(skill.id)}>{skill.name}</p>
                <div className="progress-bar">
                  <div
                    className={`progress-fill ${activeSkill === skill.id ? 'animate-progress' : ''}`}
                    style={{
                      width: `${progress[index]?.level}%`,
                      backgroundColor: skill.color, 
                    }}
                  ></div>
                </div>
                <div className="progress-percentage">{progress[index]?.level}%</div>
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