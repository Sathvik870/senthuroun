import React from 'react';
import '..styles/CircularBookNow.css'; // Import the CSS file for styling

const CircularBookNow = () => {
  return (
    <div className="circular-container">
      <h4 className="component-title">📍 Component 1</h4>
      
      <div className="circle-wrapper">
        <div className="outer-circle">
          <p className="rotating-text">• Book Today • Cherish Tomorrow • Book Today •</p>
          <div className="inner-circle">
            <button className="book-now-btn">Book Now</button>
          </div>
        </div>

        <div className="outer-circle">
          <p className="rotating-text">• Book Today • Cherish Tomorrow • Book Today •</p>
          <div className="inner-circle">
            <button className="book-now-btn">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularBookNow;
