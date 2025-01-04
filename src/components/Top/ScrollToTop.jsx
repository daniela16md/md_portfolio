import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; 
import '../../pages/Home/Home.css'

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) { 
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  return (
    <div
      className={`scroll-to-top ${visible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      <FaArrowUp size={20} />
    </div>
  );
};

export default ScrollToTop;
