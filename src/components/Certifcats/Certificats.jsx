import React, { useState, useRef } from 'react'; 
import certificates from '../../Data/certificats.json'; 
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import Modal from 'react-modal';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';  
import './Certificates.css';

Modal.setAppElement('#root');

function Certificates() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCertificat, setCurrentCertificat] = useState(null);

  const swiperRef = useRef(null);

  const openModal = (certificat) => {
    setCurrentCertificat(certificat);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentCertificat(null);
  };

  return (
    <div className="certificats-container">
      <h2>Mes Certificats</h2>

      <Swiper
        ref={swiperRef} 
        spaceBetween={30} 
        slidesPerView={3} 
        loop={true}
        speed={500}
        breakpoints={{
          100: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {certificates.certificats.map((certificat) => (
          <SwiperSlide key={certificat.id} onClick={() => openModal(certificat)}>
            <div className="certificat-card">
              <img 
                src={certificat.image} 
                alt={certificat.tittle || 'Certificat'}
                className="certificat-image" 
              />
              {certificat.tittle && <p className="certificat-title">{certificat.tittle}</p>}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-buttons">
        <button className="swiper-button-left" onClick={() => swiperRef.current.swiper.slidePrev()} aria-label="Précédent">
          <FaChevronLeft size={30} />
        </button>
        <button className="swiper-button-right" onClick={() => swiperRef.current.swiper.slideNext()} aria-label="Suivant">
          <FaChevronRight size={30} />
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Certificat Détail"
        className="modal-content-certificats"
        overlayClassName="modal-overlay"
      >
        {currentCertificat && (
          <div className="modal-body">
            <button className="close-modal" onClick={closeModal}>X</button>
            <img 
              src={currentCertificat.image} 
              alt={currentCertificat.alt || 'Certificat sans titre'} 
              className="modal-certificat-image" 
              loading="lazy"
              width="250"
              height="200"
            />
            <p>{currentCertificat.tittle}</p>
            <p>{currentCertificat.description || 'Certificat obtenu en cours de formation Openclassrooms.'}</p>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default Certificates;
