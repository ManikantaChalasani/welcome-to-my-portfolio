import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import ButtonsSection from './ButtonsSection';
import Footer from './Footer';
import Resume from './navcom/Resume';
import Education from './navcom/Education';
import Projects from './navcom/Projects';
import Skills from './navcom/Skills';
import ProfileSection from './ProfileSection'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* The Home component is always displayed */}
        <Home />
        
        {/* The ProfileSection should only appear on the home page, not with other routes */}
        <Routes>
          {/* Use the exact path for home */}
          <Route path="/" element={<ProfileSection />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        
        {/* Button Section is always displayed */}
        <ButtonsSection />
        
        {/* Footer is always displayed */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
