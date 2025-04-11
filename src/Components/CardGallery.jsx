import React from 'react';
import '../styles/CardGallery.css';

// Import your real images here
import image1 from '../images/summa.jpg';
import image2 from '../images/summa.jpg';
import image3 from '../images/summa.jpg';
import image4 from '../images/summa.jpg';
import image5 from '../images/summa.jpg';

const CardGallery = () => {
  const images = [image1, image2, image3, image4, image5];

  return (
    <div className="card-gallery">
      {images.map((src, index) => (
        <div className={`card card-${index}`} key={index}>
          <img src={src} alt={`Card ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default CardGallery;
