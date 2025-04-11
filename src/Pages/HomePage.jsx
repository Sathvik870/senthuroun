import React from 'react';
import '../styles/HomePage.css';
import ImageCarousel from '../Components/ImageCarousel';
import CardGallery from '../Components/CardGallery';
import ServicesPage from './ServicesPage';  
import TestimonialCarousel from '../Components/TestimonialCarousel';
import {Link} from 'react-router-dom'
const HomePage = () => {
  return (
    <div className="homepage">

<div className="hero-wrapper">
  {/* Navbar */}
  <nav className="navbar">
    <ul className="nav-links">
      <Link to='/profile'>Profile</Link>
      <li>Portfolio</li>
      <Link to='/about'>About Us</Link>
      <li>Packages</li>
    </ul>
    <div className="logo">✨Stunning</div>
    <div className="nav-actions">
      <p>Services</p>
    <button className="whatsapp-btn">
  <i className="fab fa-whatsapp"></i>
</button>

      <button className="book-now-nav">Book Now</button>
    </div>
  </nav>

  {/* Hero Section */}
  <section className="hero">
    <div className="hero-overlay">
      <div className="hero-text">
        <h1>Turning Special Moments<br />into Timeless Memories</h1>
        <p>From cherished personal moments to professional events, we've got you covered.</p>
      </div>
    </div>
  </section>
</div>



      {/* Journey Section */}
      <section className="journey">
        <h2><span>Our Journey</span> So Far</h2>
        <p>At Stunning Eventz, we take pride in our legacy of creating unforgettable memories...</p>
        <div className="stats">
          <div><strong>1,000+</strong><br />Events Covered</div>
          <div><strong>500+</strong><br />Happy Clients</div>
          <div><strong>10+</strong><br />Years of Excellence</div>
          <div><strong>40+</strong><br />Professionals Team</div>
        </div>
        <button className="know-more-btn">Know More</button>
      </section>
      <ImageCarousel/>
      <ServicesPage/>
      <TestimonialCarousel/>
      <CardGallery/>
    </div>
  );
};

export default HomePage;
