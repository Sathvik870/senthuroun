import React from 'react';
import '../styles/ImageCarousel.css'; // Link to your CSS file

// Import each image manually (since it's in src/images/)
import img1 from '../images/summa.jpg';
import img2 from '../images/summa.jpg';
import img3 from '../images/summa.jpg';
import img4 from '../images/summa.jpg';
import img5 from '../images/summa.jpg';

const ImageCarousel = () => {
  const images = [img1, img2, img3, img4, img5];

  return (
    <div className="carousel-container">
      {images.map((src, index) => (
        <div className="carousel-image-wrapper" key={index}>
          <img src={src} alt={`Slide ${index + 1}`} className="carousel-image" />
        </div>
      ))}
    </div>
  );
};

export default ImageCarousel;
