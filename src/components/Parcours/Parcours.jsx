import React, { useState } from 'react';
import diplomes from '../../Data/diplome.json';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './Parcours.css'; 

function Parcours() {
    const [currentIndex, setCurrentIndex] = useState(0); 
    const [activeDiplome, setActiveDiplome] = useState(null);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? diplomes.diplomes.length - 1 : prevIndex - 1
        );
    };
  
    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === diplomes.diplomes.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handleDiplomeClick = (diplome) => {
        setActiveDiplome(diplome);
    };

    const closeDiplomeDetails = () => {
        setActiveDiplome(null);
    };

    const diplome = diplomes.diplomes[currentIndex]; 

    return (
        <div className='carrousel-background'>
            <section className="carrousel-container">
                <h2 className='sectionh2'>Mes Diplômes</h2>

                <div className="carrousel">
                    <div className="arrow left" onClick={handlePrev}>
                        <FaArrowLeft />
                    </div>

                    {activeDiplome ? (
                        <div className="carrousel-item-details carrousel-item" onClick={closeDiplomeDetails}>
                        <p className='carrousel-item-text'>{activeDiplome.description}</p>
                        </div>
                    ) : (
                        <div className="carrousel-item carrousel-item-details" onClick={() => handleDiplomeClick(diplome)}>
                            <h3 className='carrousel-item-text'>{diplome.name}</h3>
                            <p className='carrousel-item-text'> <strong>Année :</strong> {diplome.year}</p>
                        </div>
                    )}

                    <div className="arrow right" onClick={handleNext}>
                        <FaArrowRight />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Parcours;
