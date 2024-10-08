import React from 'react';
function ProjectCard({ title, description, image, demoLink, codeLink }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-links">
        <a href={demoLink} target="_blank" rel="noopener noreferrer">View Demo</a>
        <a href={codeLink} target="_blank" rel="noopener noreferrer">View Code</a>
      </div>
    </div>
  );
}

function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of Project 1.",
      image: "./temp.png",
      demoLink: "https://templeorganizationn.netlify.app/",
      codeLink: "https://github.com/ManikantaChalasani/temple-Organization"
    },
    {
      title: "Project 2",
      description: "A brief description of Project 2.",
      image: "./port.png",
      demoLink: "https://your-demo-link.com",
      codeLink: "https://github.com/ManikantaChalasani/welcome-to-my-portfolio"
    },
  ];

  return (
    <div className="project-section">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
