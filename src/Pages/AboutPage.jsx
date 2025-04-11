import React from 'react';
import '../styles/AboutPage.css';
import image from '../images/summa.jpg';

const AboutPage = () => {
  return (
    <div className="about-container">
        
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `url(${image})` }}>
        <div className="hero-text">
          <h1>Creating Timeless Memories,<br />One Frame at a Time</h1>
          <p>Discover the story behind Stunning Eventz and our passion for capturing life’s most cherished moments.</p>
        </div>
      </section>

      {/* About Content Section */}
      <section className="about-content">
        <div className="founder-block">
          <div className="founder-img-wrapper">
            <img src={image} alt="Vignesh" className="founder-img" />
            <div className="founder-badge">Vignesh<br /><span>Our Founder</span></div>
          </div>

          <div className="legacy-text">
            <h2>
              <span className="legacy-highlight">A Legacy of Excellence</span><br />
              in Photography
            </h2>
            <p>
              Founded by Vignesh, Stunning Eventz has been a trusted name in photography for over a decade.
              Starting as a passion for capturing life’s beauty, we’ve grown into a professional community
              of 40 dedicated experts, specializing in diverse photography and event services. Collaborating
              with Hanatoria and Senthuron Tech, we combine artistry with technology to <span className="underline-blue">deliver unforgettable experiences</span>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
