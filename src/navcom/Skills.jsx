import React from 'react';

function Skill({ title, description, image, isImageLeft }) {
  return (
    <div className={`skill-container ${isImageLeft ? 'reverse' : ''}`}>
      <div className="skill-image">
        <img src={image} alt={title} />
      </div>
      <div className="skill-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

function skills() {
  return (
    <div className="skills-section">
      <Skill 
        title="Software Development" 
        description="Experience with JavaScript, React, and other web technologies." 
        image="./it.webp" 
        isImageLeft={true} 
      />
      <Skill 
        title="ECE Core Skills" 
        description="Expertise in circuit design, microcontrollers, and communication systems." 
        image="./ece.webp" 
        isImageLeft={false} 
      />
      {/* Add more <Skill /> components as needed */}
    </div>
  );
}

export default skills;
