import React from 'react';
import '../styles/ProfilePage.css';
import image from '../images/summa.jpg';
const ProfilePage = () => {
  return (
    <div className="profile-container">
      <div className="banner">
        <img src={image} alt="Banner" className="banner-img" />
        <div className="profile-picture">
          <img src={image} alt="Profile" />
          <span className="open-to-work">#OpenToWork</span>
        </div>
      </div>

      <div className="profile-details">
        <h1>Sathvik Ayyasamy <span className="verified">✔️</span> <span className="pronouns">(He/Him)</span></h1>
        <p className="description">
          Aspiring Software Engineer | Web Development | JavaScript Developer | Data Analyst | Coimbatore Institute of Technology | Decision and Computing Science Student.
        </p>

        <p className="location">📍 Coimbatore, Tamil Nadu, India · <a href="#">Contact info</a></p>
        <a href="#" className="portfolio-link">🌐 My portfolio</a>
        <p className="connections">500+ connections</p>

        <div className="action-buttons">
          <button className="open-to">Open to</button>
          <button className="add-section">Add profile section</button>
          <button className="enhance">Enhance profile</button>
          <button className="resources">Resources</button>
        </div>

        <div className="open-to-work-box">
          <strong>Open to work</strong><br />
          Software Developer, Data Analyst, Web Developer, Business Data Analyst and Back End Developer roles
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
