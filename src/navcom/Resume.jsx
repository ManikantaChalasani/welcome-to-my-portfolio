import React from 'react';

function ResumeSection() {
  const resumeUrl = './Manikanta.pdf';

  return (
    <div className="resume-section">
      <h2>Resume</h2>
      <p>Click the buttons below to view or download my resume.</p>
      <div className="resume-buttons">
        <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="resume-button">View Resume</a>
        <a href={resumeUrl} download className="resume-button">Download Resume</a>
      </div>
    </div>
  );
}

export default ResumeSection;
