import React from 'react';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">

<div className="hero-wrapper">
  {/* Navbar */}
  <nav className="navbar">
    <ul className="nav-links">
      <li>Profile</li>
      <li>Portfolio</li>
      <li>About Us</li>
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


      {/* Contact and FAQ Section */}
      <section className="two-column-section">
        <div className="left-frame">
          <h2>Contact Us</h2>
          <p>Have questions or need help? Reach out now.</p>
          <p>Email: contact@stunningeventz.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: 123 Event Street, Celebration City, India</p>
        </div>
        <div className="right-frame">
          <h2>FAQs</h2>
          <ul>
            <li>📸 What services do you offer?</li>
            <li>📍 How do I book an event?</li>
            <li>💼 Do you provide corporate event coverage?</li>
            <li>🕐 What is your typical delivery timeline?</li>
            <li>🎁 Do you offer custom packages?</li>
          </ul>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
