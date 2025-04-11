import React from 'react';
import '..styles/CircularBookNowTwo.css'; // Adjust the path as necessary

const CircularBookNowTwo = () => {
  return (
    <div className="circular2-container">
      <h4 className="component-title">📍 Component 2</h4>
      
      <div className="circle-wrapper">
        <div className="outer-circle">
          <p className="rotating-text">• Product Shoot • Weddings • Celebrations • Events •</p>
          <div className="inner-circle">
            <button className="book-now-btn">Book Now</button>
          </div>
        </div>

        <div className="outer-circle">
          <p className="rotating-text">• Events • Celebrations • Weddings • Product Shoot •</p>
          <div className="inner-circle">
            <button className="book-now-btn">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularBookNowTwo;
