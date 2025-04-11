import React from 'react';
import '../styles/ProfileCardSection.css';

const ProfileCardSection = () => {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-image"></div>
        <div className="profile-footer">
          <h4>Name of the person</h4>
          <p>Designation</p>
        </div>
      </div>

      <div className="profile-card">
        <div className="profile-image"></div>
        <div className="profile-footer">
          <h4>Name of the person</h4>
          <p>Designation</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCardSection;
