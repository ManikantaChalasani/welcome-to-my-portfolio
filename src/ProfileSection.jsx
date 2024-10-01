import React from 'react';
import profileImg from './images/profile-image.jpg';

const ProfileSection = () => {
  return (
    <section className="profile-section">
      <img src={profileImg} alt="Profile" className="profile-img" />
      <div className="profile-info">
        <h1>Manikanta Chalasani</h1>
        <p>A Bit About Me</p>
        <p>
          I am a graduate student at the Dhanekula Institute Of Engineering & Technology Department of Electronics & communication Engineering.I am a passionate IT in software development, specializing in web applications using modern frameworks like React. I have a strong interest in leveraging technology to solve real-world problems and continuously learning about emerging tools and methodologies in the field.
        </p>
      </div>
    </section>
  );
};

export default ProfileSection;
