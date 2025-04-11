import React from 'react';
import '../styles/Footer.css'; // Import the styles
import image1 from '../images/eventlogo.png'; // Import your logo image
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src={image1} alt="Stunning Events Logo" className="footer-logo" />
          <p>
            At Stunning Eventz, we specialize in capturing life’s most precious moments with creativity and precision.
            From weddings to corporate events, baby shoots to milestone celebrations, our expert team ensures every
            frame tells a story worth cherishing.
          </p>
          <div className="social-icons">
            <span>FOLLOW US ON</span>
            <a href="#"><i className="fa fa-instagram"></i></a>
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-youtube"></i></a>
          </div>
        </div>

        <div className="footer-links">
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Home</li>
            <li>Portfolio</li>
            <li>About Us</li>
            <li>Packages</li>
            <li>Frame and Book</li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>SERVICES</h4>
          <ul>
            <li>Wedding Photography & Videography</li>
            <li>Newborn Baby Shoots & Toddlers</li>
            <li>Earpiercing Ceremony</li>
            <li>Puberty Ceremony</li>
            <li>Naming Ceremony</li>
            <li>Housewarming Ceremony</li>
            <li>Candid Photography</li>
            <li>Modeling Photography</li>
          </ul>
        </div>

        <div className="footer-links">
          <ul style={{ marginTop: '32px' }}>
            <li>Baby Shower</li>
            <li>Pre or Post Photoshoot</li>
            <li>Birthday Celebrations</li>
            <li>Maternity Photoshoot</li>
            <li>60th Wedding Anniversary</li>
            <li>Product Photography</li>
            <li>Corporate Photography</li>
          </ul>
        </div>

        <div className="footer-hireus">
          <div className="circle-text">
            <p>Wedding . Events . Product Shoot . Birthday .</p>
            <div className="hire-us-button">
              Hire Us
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
