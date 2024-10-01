// ButtonsSection.js
import React from 'react';
import { Link } from 'react-router-dom';

const ButtonsSection = () => {
  const buttons = [
    { name: 'Education', path: '/education' },
    { name: 'Skills', path: '/skills' },
    { name: 'Project', path: '/project' },
    { name: 'Resume', path: '/resume' }
  ];

  return (
    <section className="buttons-section">
      {buttons.map((btn, index) => (
        <Link key={index} to={btn.path}>
          <button className={`btn btn-${btn.name.toLowerCase()}`}>
            {btn.name}
          </button>
        </Link>
      ))}
    </section>
  );
};

export default ButtonsSection;
