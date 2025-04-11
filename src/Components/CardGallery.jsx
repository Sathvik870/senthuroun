import React from 'react';
import '../styles/CardGallery.css'; // Import the CSS file for styling

const imageList = [
  '../images/summa.jpg',
  '../images/summa.jpg',
  '../images/summa.jpg',
  '../images/summa.jpg'
];

const RotatingCardGallery = () => {
  return (
    <div className="gallery-wrapper">
      <div className="gallery-content">
        {/* Left Images */}
        <div className="side-images left">
          <img src={imageList[0]} alt="side-1" className="rotated-card rotate-left" />
          <img src={imageList[1]} alt="side-2" className="rotated-card rotate-more-left" />
        </div>

        {/* Center Text & Buttons */}
        <div className="center-content">
          <h1>
            <span className="highlight">Turn</span> Moments into <span className="highlight">Memories</span> <br />
            – Let’s Make It Happen!
          </h1>
          <p>
            Whether it’s a wedding, a milestone celebration, or a professional shoot, we’re here to
            capture your story just the way you envision. Share your requirements, and we’ll provide
            a customized quote tailored to your event and preferences.
          </p>
          <div className="buttons">
            <button className="red-btn">Request A Quote</button>
            <button className="white-btn">View Packages</button>
          </div>
        </div>

        {/* Right Images */}
        <div className="side-images right">
          <img src={imageList[3]} alt="side-3" className="rotated-card rotate-right" />
          <img src={imageList[2]} alt="side-4" className="rotated-card rotate-more-right" />
        </div>
      </div>
    </div>
  );
};

export default RotatingCardGallery;
